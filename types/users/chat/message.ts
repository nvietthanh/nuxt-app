import type { MessageStatus } from "./message-status";

export interface AttachmentAttribute {
  size: number;
  extension: string;
  width?: number;
  height?: number;
}

export interface MessageAttachment {
  id: number;
  name: string;
  url: string;
  attributes: AttachmentAttribute;
}

export interface Message {
  id: number;
  user_id: number;
  content: string | null;
  attachments: MessageAttachment[] | null;
  quote: Message | null;
  created_at: string;
  status?: MessageStatus;
}
