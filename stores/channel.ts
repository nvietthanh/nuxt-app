import { defineStore } from "pinia";
import type { Channel } from "@/types/users/chat/channel";

export const useChannelStore = defineStore("channels", {
  state: () => ({
    channels: [] as Array<Channel>,
    channelDetail: null as Channel | null,
    channelId: null as number | null,
    isLoading: false,
  }),

  getters: {},

  actions: {
    setChannel(channels: Channel[]) {
      this.channels = channels;
    },
    addChannel(message: Channel) {
      this.channels.unshift(message);
    },
    loadChannel(channels: Channel[]) {
      this.channels.push(...channels);
    },
    clearChannel() {
      this.channels = [];
    },
    setChannelDetailId(channelId: number) {
      this.channelId = channelId;
    },
    setChannelDetail(channel: Channel) {
      this.channelDetail = channel;
    },
  },
});
