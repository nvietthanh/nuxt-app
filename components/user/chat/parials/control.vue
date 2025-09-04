<template>
    <div v-if="messageStore.isLoading" class="chat-msg-list__loading">
      <div class="loader" />
    </div>
    <div class="chat-msg-list__scroll-last-msg">
      <button
        class="chat-msg-list__btn-scroll"
        @click="handleScrollToLastMessage()"
      >
        <i class="bi bi-caret-down-fill"></i>
      </button>
    </div>
</template>

<script setup lang="ts">
import { useMessageStore } from "@/stores/message";

const emits = defineEmits<{
  (e: "scroll-to-last"): void;
}>();

const messageStore = useMessageStore();

const handleScrollToLastMessage = () => {
    emits('scroll-to-last')
}
</script>