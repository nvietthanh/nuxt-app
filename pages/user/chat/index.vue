<template>
  <NuxtLayout name="user-layout" :is-footer="false" :is-full-main="true">
    <template v-slot:main>
      <div id="chat-channel">
        <div class="chat-container">
          <SidebarComponent />
          <div class="chat-msg">
            <div class="h-full flex items-center justify-center font-bold">
              Chưa có cuộc trò chuyện, vui lòng chọn cuộc trò chuyện bên cạnh
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SidebarComponent from "@/components/user/chat/sidebar.vue";
import { useChannelStore } from "@/stores/channel";
import { getChannelList } from "@/services/user/chatService";

definePageMeta({
  name: "chat",
});

const channelStore = useChannelStore();

onMounted(() => {
  channelStore.clearChannel();

  handleLoadChannel();
});

const handleLoadChannel = async () => {
  const channels = await getChannelList();

  channelStore.setChannel(channels);
};
</script>
<style>
@import "@/assets/css/user/chat/style.css";
</style>
