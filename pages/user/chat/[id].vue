<template>
  <NuxtLayout name="user-layout" :is-footer="false" :is-full-main="true">
    <template v-slot:main>
      <div id="chat-channel">
        <div class="chat-container">
          <SidebarComponent
            @load-more-channel="handleLoadListChannel"
            @search-channel="handleSearchChannel"
          />
          <div class="chat-msg">
            <MainComponent @load-more-message="handleLoadMoreMessage" />
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SidebarComponent from "@/components/user/chat/sidebar.vue";
import MainComponent from "@/components/user/chat/main.vue";
import { useChannelStore } from "@/stores/channel";
import { useMessageStore } from "@/stores/message";
import { useRoute } from "vue-router";
import {
  getChannelList,
  getChannelDetail,
  getMessagesByChannel,
} from "@/services/user/chatService";
import type { Paginate } from "@/types/paginate";

definePageMeta({
  name: "chat.detail",
  middleware: "auth",
});

interface ChannelFilter {
  page: number;
  limit: number;
  keyword?: string | null;
}
interface MessageFilter {
  page: number;
  limit: number;
}

const route = useRoute();
const channelStore = useChannelStore();
const messageStore = useMessageStore();

// ref channel
const channelId = Number(route.params.id);
const channelFilter = ref<ChannelFilter>({
  page: 1,
  limit: 30,
  keyword: null,
});
const channelPaginate = ref<Paginate>({});
// ref message
const messageFilter = ref<MessageFilter>({
  page: 1,
  limit: 30,
});

onMounted(() => {
  handleResetDataAll();
  handleLoadDetailChannel();
  handleLoadListChannel();
  handleLoadListMessage();
});

const handleResetDataAll = () => {
  channelStore.setChannelDetailId(channelId);
  messageStore.clearMessage();
};

// handle channel
const handleLoadDetailChannel = async () => {
  startLoading();

  const channel = await getChannelDetail(channelId);

  channelStore.setChannelDetail(channel);
  stopLoading();
};
const handleLoadListChannel = async () => {
  channelStore.isLoading = true;

  const channels = await getChannelList(channelFilter.value);

  channelStore.isLoading = false;

  if (messageStore.messages.length === 0) {
    channelStore.setChannel(channels);
  } else {
    channelStore.loadChannel(channels);
  }
};
const handleSearchChannel = (val: string | null) => {
  channelStore.clearChannel();

  handleLoadListChannel();
};

// handle message
const handleLoadListMessage = async () => {
  messageStore.isLoading = true;

  const messages = await getMessagesByChannel(channelId, messageFilter.value);

  messageStore.isLoading = false;

  if (messageStore.messages.length === 0) {
    messageStore.setMessage(messages);
  } else {
    messageStore.loadMessage(messages);
  }
};
const handleLoadMoreMessage = () => {
  messageFilter.value.page += 1;

  handleLoadListMessage();
};
</script>
<style>
@import "@/assets/css/user/chat/style.css";
</style>
