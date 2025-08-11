<template>
  <div class="chat-sidebar">
    <h1 class="chat-sidebar-title">Chat message</h1>
    <div class="chat-sidebar-search">
      <el-input
        v-model="keyword"
        type="text"
        size="large"
        placeholder="Tìm kiếm"
        @keyup="handleSearchChat()"
      />
    </div>
    <div class="chat-channel-main" :class="{ 'no-data': channels.length === 0 }">
      <div v-if="channelStore.isLoading" class="chat-channel-list__loading">
        <div class="loader" />
      </div>
      <div
        ref="channelListRef"
        class="chat-channel-list"
        @scroll="handleScrollListChannel()"
      >
        <NuxtLink
          v-for="(item, index) in channels"
          :to="{ name: 'chat.detail', params: { id: item.id } }"
          class="chat-channel-item"
          :class="{ active: item.id === channelId }"
        >
          <ImageLoading src="" alt="" class="chat-channel-item__img" />
          <div class="chat-channel-item__content">
            <div class="chat-channel-item__name">{{ item.name }}</div>
            <div class="chat-channel-item__main">
              <div class="chat-channel-item__last-msg">
                {{ item.last_message.content }}
              </div>
              <div class="chat-channel-item__last-time">
                {{ timeAgo(item.last_message.created_at) }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import { useChannelStore } from "@/stores/channel";
import { timeAgo } from "@/libs/chat";

const channelStore = useChannelStore();

const emits = defineEmits<{
  (e: "load-more-channel"): void;
  (e: "search-channel", val: string | null): void;
}>();

const channelListRef = ref<HTMLDivElement | null>(null);
const keyword = ref<string | null>(null);

const channelId = computed(() => channelStore.channelId);
const channels = computed(() => channelStore.channels);

const handleSearchChat = debounce(() => {
  emits('search-channel', keyword.value)
}, 500);

const handleScrollListChannel = () => {
  if (channelListRef.value && !channelStore.isLoading) {
    const scrollTop =
      channelListRef.value.scrollTop + channelListRef.value.offsetHeight;
    const scrollHeight = channelListRef.value.scrollHeight;

    if (scrollHeight - scrollTop <= 100) {
      emits("load-more-channel");
    }
  }
};
</script>
<style>
@import "@/assets/css/user/chat/sidebar.css";
</style>
