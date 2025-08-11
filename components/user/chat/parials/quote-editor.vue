<template>
  <div v-show="messageReply" class="chat-msg-reply">
    <div class="chat-msg-reply-wrap">
      <div class="chat-msg-reply__author">
        Đang trả lời {{ userId === messageReply?.user_id ? "chính mình" : "" }}
      </div>
      <div class="chat-msg-reply__content">
        {{ messageContent }}
      </div>
    </div>
    <div class="chat-msg-reply-action">
      <button class="chat-msg-reply-action__close" @click="handleRemoveReply()">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Message } from "@/types/users/chat/message";

const emits = defineEmits<{
  (e: "remove-reply"): void;
}>();

const userId = inject<Ref<number>>("userId");
const messageReply = inject<Ref<Message | null>>("messageReply", ref(null));

const messageContent = computed((): string => {
  if (messageReply.value?.content) return messageReply.value?.content;

  const attachmentLength = messageReply.value?.attachments?.length;

  if (messageReply.value?.attachments && attachmentLength) {
    return attachmentLength === 1 ? "Đã gửi một ảnh" : "Đã gửi nhiều ảnh";
  }

  return "";
});

const handleRemoveReply = () => {
  emits("remove-reply");
};
</script>
