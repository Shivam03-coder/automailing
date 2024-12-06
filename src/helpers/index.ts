import { db } from "@/server/db";
import {
  EmailAddress,
  EmailRecord,
  IEmailResponse,
  ISyncResponse,
} from "@/types/global";
import axios from "axios";
export class Account {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  // Method to initiate the sync process
  private async startSync(daysWithin: number): Promise<ISyncResponse> {
    try {
      const response = await axios.post<ISyncResponse>(
        "https://api.aurinko.io/v1/email/sync",
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            daysWithin,
            bodyType: "html",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Method to fetch updated emails by delta token or page token
  private async getUpdatedEmailsByBookmarkToken({
    deltaToken,
    pageToken,
  }: {
    deltaToken?: string | null;
    pageToken?: string | null;
  }): Promise<IEmailResponse> {
    try {
      const params: Record<string, string> = {};
      if (deltaToken) params.deltaToken = deltaToken;
      if (pageToken) params.pageToken = pageToken;

      const response = await axios.get<IEmailResponse>(
        "https://api.aurinko.io/v1/email/sync/updated",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params,
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Primary email sync function
  async primaryEmailSyncFunc() {
    try {
      let syncResponse = await this.startSync(2);
      const maxAttempts = 10;
      let attempts = 0;

      while (!syncResponse.ready && attempts < maxAttempts) {
        console.log(
          `Attempt ${attempts + 1}/${maxAttempts}: Sync not ready, retrying...`,
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
        syncResponse = await this.startSync(2);
        attempts++;
      }

      if (!syncResponse.ready) {
        throw new Error("SYNCRONIZATION_FAILED");
      }

      let storedDeltaToken = syncResponse.syncUpdatedToken;
      let updatedResponse = await this.getUpdatedEmailsByBookmarkToken({
        deltaToken: storedDeltaToken,
      });

      let recordEmails: EmailRecord[] = updatedResponse.records;

      console.log(`Fetched ${recordEmails.length} emails from initial sync.`);

      // Fetch all additional pages of updated emails and we will check upadted mails are there or not
      while (updatedResponse.nextPageToken) {
        console.log("Fetching next page of emails...");
        updatedResponse = await this.getUpdatedEmailsByBookmarkToken({
          pageToken: updatedResponse.nextPageToken,
        });
        recordEmails = recordEmails.concat(updatedResponse.records);

        if (updatedResponse.nextDeltaToken) {
          storedDeltaToken = updatedResponse.nextDeltaToken;
        }
      }

      console.log(
        `Sync Completed: Total ${recordEmails.length} emails fetched`,
      );

      return {
        recordEmails,
        deltaToken: storedDeltaToken,
      };
    } catch (error) {
      console.log(error);
      throw new Error("Primary email sync process failed.");
    }
  }
}
