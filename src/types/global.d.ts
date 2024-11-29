import { z } from "zod";

export interface ISyncResponse {
  syncUpdatedToken: string;
  syncDeletedToken: string;
  ready: boolean;
}

export interface IEmailResponse {
  nextPageToken: string;
  nextDeltaToken: string;
  records: EmailRecord[];
}

export interface EmailRecord {
  id: string;
  threadId: string;
  createdTime: string;
  lastModifiedTime: string;
  sentAt: string;
  receivedAt: string;
  internetMessageId: string;
  subject: string;
  sysLabels: string[];
  keywords: string[];
  sysClassifications: string[];
  sensitivity: "normal" | "private" | "personal" | "confidential";
  meetingMessageMethod?: "request" | "reply" | "cancel" | "counter" | "other";
  from: EmailAddress;
  to: EmailAddress[];
  cc: EmailAddress[];
  bcc: EmailAddress[];
  replyTo: EmailAddress[];
  hasAttachments: boolean;
  body: string;
  bodySnippet: string;
  attachments: Attachment[];
  inReplyTo: string;
  references: string;
  threadIndex: string;
  internetHeaders: InternetHeader[];
  nativeProperties: Record<string, string>;
  folderId: string;
  omitted: string[];
}

export interface EmailAddress {
  name: string;
  address: string;
  raw: string;
}

export interface Attachment {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  inline: boolean;
  contentId: string;
  content: string;
  contentLocation: string;
}

export interface InternetHeader {
  name: string;
  value: string;
}
