import type { MESSAGE_STATUS } from "@/const/message-status";

export type MessageStatus = (typeof MESSAGE_STATUS)[keyof typeof MESSAGE_STATUS];
