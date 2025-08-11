import { defineStore } from "pinia";
import type { Message } from "@/types/users/chat/message";

export const useMessageStore = defineStore("messages", {
  state: () => ({
    messages: [] as Array<Message>,
    isLoading: false,
  }),

  getters: {},

  actions: {
    setMessage(messages: Message[]) {
      this.messages = messages;
    },
    addMessage(message: Message) {
      this.messages.unshift(message);
    },
    loadMessage(messages: Message[]) {
      this.messages.push(...messages)
    },
    findMessage(messageId: number): Message | undefined {
      return this.messages.find((item) => item.id === messageId);
    },
    clearMessage() {
      this.messages = [];
    },
    isFirstMessage(itemIndex: number): boolean {
      const messagesList = this.messages;
      const current = messagesList[itemIndex];
      const previous = messagesList[itemIndex + 1];

      if (!previous) return true;

      return (
        previous.user_id !== current.user_id ||
        this.checkDiffOneMinute(previous.created_at, current.created_at)
      );
    },
    isLastMessage(itemIndex: number): boolean {
      const messagesList = this.messages;
      const current = messagesList[itemIndex];
      const previous = messagesList[itemIndex + 1];
      const next = messagesList[itemIndex - 1];

      if (!previous || previous.user_id !== current.user_id) return false;

      if (!next) return true;

      return (
        current.user_id === next.user_id &&
        this.checkDiffOneMinute(current.created_at, next.created_at)
      );
    },
    isMoreThanOneMinute(itemIndex: number): boolean {
      const messagesList = this.messages;
      const current = messagesList[itemIndex];
      const previous = messagesList[itemIndex + 1];

      if (!previous) return true;

      return this.checkDiffOneMinute(previous.created_at, current.created_at);
    },
    checkDiffOneMinute(firstDate: string, secondDate: string): boolean {
      const date1 = new Date(firstDate);
      const date2 = new Date(secondDate);

      const diffInMs = Math.abs(date1.getTime() - date2.getTime());
      return diffInMs >= 60 * 1000;
    },
  },
});
