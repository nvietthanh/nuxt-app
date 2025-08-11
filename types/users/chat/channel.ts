import type { Message } from "./message";

export interface Channel {
  id: number;
  name: string;
  last_message?: Message;
  created_at: string;
}
