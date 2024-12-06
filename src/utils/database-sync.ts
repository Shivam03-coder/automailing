import { db } from "@/server/db";
import { Attachment, EmailAddress, EmailRecord } from "@/types/global";
import pLimit from "p-limit";

// ======= ARRAY OF MAILS TO BE SYNCED IN DATABASE. =========
export const SyncToDataBase = async (
  allEmails: EmailRecord[], // Array of email records to be synced.
  accountId: string, // Account identifier to associate emails with.
): Promise<void> => {
  console.log(`syncing emails has ${allEmails.length}`);
  const Limit = pLimit(10);

  // PROCESS EACH MAIL UISNG LIMIT FUNCTION FOR CONCURRENCY CONTROL
  try {
    await Promise.all(
      allEmails.map((email, i) =>
        Limit(() => SaveEmailsInDb(email, accountId, i)),
      ),
    );
    console.log("All emails synced successfully.");
  } catch (error) {
    console.error("Error syncing emails to database:", error);
  }
};

// =======  PROCESS EACH MALE AND SAVE INTO DATABASE ========

const SaveEmailsInDb = async (
  email: EmailRecord,
  accountId: string,
  i: number,
) => {
  let emailLabelType: "inbox" | "sent" | "draft" = "inbox";

  try {
    if (
      email.sysLabels.includes("inbox") ||
      email.sysLabels.includes("important")
    ) {
      emailLabelType = "inbox";
    } else if (email.sysLabels.includes("sent")) {
      emailLabelType = "sent";
    } else if (email.sysLabels.includes("draft")) {
      emailLabelType = "draft";
    }

    //  UNIQUE EMAIL ADDRESS WITHOUT DUPLICATES

    const addressesToupSert = new Map();

    for (const user of [
      email.from,
      ...email.to,
      ...email.cc,
      ...email.bcc,
      ...email.replyTo,
    ]) {
      addressesToupSert.set(user.address, user);
    }

    // Iterate through each unique address and upsert it into the database.
    const upsertedAddresses: (Awaited<
      ReturnType<typeof upsertEmailAddress>
    > | null)[] = [];

    for (const address of addressesToupSert.values()) {
      const upsertedAddress = await upsertEmailAddress(address, accountId);
      upsertedAddresses.push(upsertedAddress);
    }

    // Filters out any "falsy" values (e.g., null, undefined, false, 0, NaN, or empty strings) from the upsertedAddresses array.

    const addressMap = new Map(
      upsertedAddresses
        .filter(Boolean)
        .map((address) => [address?.address, address]),
    );

    const fromAddress = addressMap.get(email.from.address);

    if (!fromAddress) {
      console.log(
        `Failed to upsert from address for email ${email.bodySnippet}`,
      );
      return;
    }

    const toAddresses = email.to
      .map((addr) => addressMap.get(addr.address))
      .filter(Boolean);
    const ccAddresses = email.cc
      .map((addr) => addressMap.get(addr.address))
      .filter(Boolean);
    const bccAddresses = email.bcc
      .map((addr) => addressMap.get(addr.address))
      .filter(Boolean);
    const replyToAddresses = email.replyTo
      .map((addr) => addressMap.get(addr.address))
      .filter(Boolean);

    // 2. Upsert Thread
    const thread = await db.thread.upsert({
      where: { id: email.threadId },
      update: {
        subject: email.subject,
        accountId,
        lastMessageDate: new Date(email.sentAt),
        done: false,
        participantIds: [
          ...new Set([
            fromAddress.id,
            ...toAddresses.map((a) => a!.id),
            ...ccAddresses.map((a) => a!.id),
            ...bccAddresses.map((a) => a!.id),
          ]),
        ],
      },
      create: {
        id: email.threadId,
        accountId,
        subject: email.subject,
        done: false,
        draftStatus: emailLabelType === "draft",
        inboxStatus: emailLabelType === "inbox",
        sentStatus: emailLabelType === "sent",
        lastMessageDate: new Date(email.sentAt),
        participantIds: [
          ...new Set([
            fromAddress.id,
            ...toAddresses.map((a) => a!.id),
            ...ccAddresses.map((a) => a!.id),
            ...bccAddresses.map((a) => a!.id),
          ]),
        ],
      },
    });

    // ============== EMAILS IN DB

    await db.email.upsert({
      where: { id: email.id },
      update: {
        threadId: thread.id,
        createdTime: new Date(email.createdTime),
        lastModifiedTime: new Date(),
        sentAt: new Date(email.sentAt),
        receivedAt: new Date(email.receivedAt),
        internetMessageId: email.internetMessageId,
        subject: email.subject,
        sysLabels: email.sysLabels,
        keywords: email.keywords,
        sysClassifications: email.sysClassifications,
        sensitivity: email.sensitivity,
        meetingMessageMethod: email.meetingMessageMethod,
        fromId: fromAddress.id,
        to: { set: toAddresses.map((a) => ({ id: a!.id })) },
        cc: { set: ccAddresses.map((a) => ({ id: a!.id })) },
        bcc: { set: bccAddresses.map((a) => ({ id: a!.id })) },
        replyTo: { set: replyToAddresses.map((a) => ({ id: a!.id })) },
        hasAttachments: email.hasAttachments,
        internetHeaders: email.internetHeaders as any,
        body: email.body,
        bodySnippet: email.bodySnippet,
        inReplyTo: email.inReplyTo,
        references: email.references,
        threadIndex: email.threadIndex,
        nativeProperties: email.nativeProperties as any,
        folderId: email.folderId,
        omitted: email.omitted,
        emailLabel: emailLabelType,
      },
      create: {
        id: email.id,
        emailLabel: emailLabelType,
        threadId: thread.id,
        createdTime: new Date(email.createdTime),
        lastModifiedTime: new Date(),
        sentAt: new Date(email.sentAt),
        receivedAt: new Date(email.receivedAt),
        internetMessageId: email.internetMessageId,
        subject: email.subject,
        sysLabels: email.sysLabels,
        internetHeaders: email.internetHeaders as any,
        keywords: email.keywords,
        sysClassifications: email.sysClassifications,
        sensitivity: email.sensitivity,
        meetingMessageMethod: email.meetingMessageMethod,
        fromId: fromAddress.id,
        to: { connect: toAddresses.map((a) => ({ id: a!.id })) },
        cc: { connect: ccAddresses.map((a) => ({ id: a!.id })) },
        bcc: { connect: bccAddresses.map((a) => ({ id: a!.id })) },
        replyTo: { connect: replyToAddresses.map((a) => ({ id: a!.id })) },
        hasAttachments: email.hasAttachments,
        body: email.body,
        bodySnippet: email.bodySnippet,
        inReplyTo: email.inReplyTo,
        references: email.references,
        threadIndex: email.threadIndex,
        nativeProperties: email.nativeProperties as any,
        folderId: email.folderId,
        omitted: email.omitted,
      },
    });

    const threadEmails = await db.email.findMany({
      where: { threadId: thread.id },
      orderBy: { receivedAt: "asc" },
    });

    let threadFolderType = "sent";

    for (const threadEmail of threadEmails) {
      if (threadEmail.emailLabel === "inbox") {
        threadFolderType = "inbox";
        break; // If any email is in inbox, the whole thread is in inbox
      } else if (threadEmail.emailLabel === "draft") {
        threadFolderType = "draft"; // Set to draft, but continue checking for inbox
      }
    }

    for (const attachment of email.attachments) {
      await upsertAttachment(email.id, attachment);
    }
  } catch (error) {
    console.log(error);
  }
};

const upsertEmailAddress = async (address: EmailAddress, accountId: string) => {
  try {
    const existingAddress = await db.emailAddress.findUnique({
      where: {
        accountId_address: {
          accountId: accountId,
          address: address.address ?? "",
        },
      },
    });

    if (existingAddress) {
      return await db.emailAddress.update({
        where: { id: existingAddress.id },
        data: { name: address.name, raw: address.raw },
      });
    } else {
      return await db.emailAddress.create({
        data: {
          address: address.address ?? "",
          name: address.name,
          raw: address.raw,
          accountId,
        },
      });
    }
  } catch (error) {
    console.log(`Failed to upsert email address: ${error}`);
    return null;
  }
};

const upsertAttachment = async (emailId: string, attachment: Attachment) => {
  try {
    await db.emailAttachment.upsert({
      where: { id: attachment.id ?? "" },
      update: {
        name: attachment.name,
        mimeType: attachment.mimeType,
        size: attachment.size,
        inline: attachment.inline,
        contentId: attachment.contentId,
        content: attachment.content,
        contentLocation: attachment.contentLocation,
      },
      create: {
        id: attachment.id,
        emailId,
        name: attachment.name,
        mimeType: attachment.mimeType,
        size: attachment.size,
        inline: attachment.inline,
        contentId: attachment.contentId,
        content: attachment.content,
        contentLocation: attachment.contentLocation,
      },
    });
  } catch (error) {
    console.log(`Failed to upsert attachment for email ${emailId}: ${error}`);
  }
};
