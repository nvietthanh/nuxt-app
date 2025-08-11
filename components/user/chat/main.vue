<template>
  <div class="chat-msg-header">
    <HeaderInfoComponent />
  </div>
  <div
    class="chat-msg-main"
    :class="{
      'no-data': messages.length === 0,
      'is-scroll-last': isEnableBtnScroll,
    }"
  >
    <ControlComponent @scroll-to-last="handleScrollToLastMessage" />
    <div
      ref="chatListRef"
      class="chat-msg-list"
      @scroll="handleScrollListMessage()"
    >
      <MessageComponent
        v-for="(item, index) in messages"
        :message="item"
        :is-more-than-minute="messageStore.isMoreThanOneMinute(index)"
        :is-current-send="item.user_id === userId"
        :is-first="messageStore.isFirstMessage(index)"
        :is-last="messageStore.isLastMessage(index)"
        @reply-message="handleReplyMessage"
        @delete-message="handleDeleteMessage"
        @scroll-quote-message="handleScrollToMessage"
      />
    </div>
  </div>
  <div class="chat-msg-footer">
    <QuoteEditorComponent @remove-reply="handleRemoveReply" />
    <ImageUploadComponent />
    <EditorComponent
      ref="editorComponentRef"
      @send-message="handleSendMessage"
      @upload-image="handleUploadImage"
    />
  </div>
</template>
<script setup lang="ts">
import HeaderInfoComponent from "./parials/header.vue";
import ImageUploadComponent from "./parials/image-upload.vue";
import QuoteEditorComponent from "./parials/quote-editor.vue";
import EditorComponent from "./parials/editor.vue";
import MessageComponent from "./parials/message.vue";
import ControlComponent from "./parials/control.vue";
import { useMessageStore } from "@/stores/message";
import { useChannelStore } from "@/stores/channel";
import type { Message } from "@/types/users/chat/message";
import type { ImageUpload } from "@/types/users/chat/image-upload";
import type { Channel } from "@/types/users/chat/channel";

const emits = defineEmits<{
  (e: "load-more-message"): void;
}>();

const QUOTE_FOCUS_CLASS = "quote-focus";
const messageStore = useMessageStore();
const channelStore = useChannelStore();

const chatListRef = ref<HTMLDivElement | null>(null);
const editorComponentRef = ref<InstanceType<typeof EditorComponent>>();

const userId = ref(1);
const messageReply = ref<Message | null>(null);
const imageUploads = ref<ImageUpload[]>([]);
const isEnableBtnScroll = ref<boolean>(false);

const channelInfo = computed((): Channel | null => channelStore.channelDetail);
const messages = computed((): Message[] => messageStore.messages);

onMounted(() => {
  handleFocusEditor();
});

const handleShowDetail = () => {};

// handle message
const handleSendMessage = () => {
  handleRemoveReply();
  handleScrollToLastMessage();
  handleRemoveQuoteFocus();
};
const handleDeleteMessage = (messageId: number) => {
  const indexMsg = messages.value.findIndex((item) => item.id === messageId);

  if (indexMsg !== -1) {
    messages.value.splice(indexMsg, 1);
  }
};

// handle reply message
const handleReplyMessage = (messageId: number) => {
  messageReply.value = messageStore.findMessage(messageId) ?? null;

  if (messageId == messages.value[messages.value.length - 1].id) {
    handleScrollToLastMessage();
  }

  handleFocusEditor();
  handleRemoveQuoteFocus();
};
const handleRemoveReply = () => {
  messageReply.value = null;
  imageUploads.value = [];
};

// handle upload image message
const handleUploadImage = () => {
  setTimeout(() => {
    const el = chatListRef.value;
    if (!el) return;

    const distanceToBottom = el.scrollHeight - (el.scrollTop + el.clientHeight);
    const isNearBottom = distanceToBottom <= 100;

    if (isNearBottom) {
      handleScrollToLastMessage();
    }
  }, 10);

  handleRemoveQuoteFocus();
};

// handle scroll to last message
const handleScrollListMessage = () => {
  if (!messageStore.isLoading && chatListRef.value) {
    const heightScroll =
      chatListRef.value.scrollHeight +
      chatListRef.value.scrollTop -
      chatListRef.value.clientHeight;

    if (heightScroll < 500) {
      emits("load-more-message");
    }

    if (chatListRef.value.scrollTop < -100) {
      isEnableBtnScroll.value = true;
    } else {
      isEnableBtnScroll.value = false;
    }
  }
};
const handleScrollToLastMessage = () => {
  nextTick(() => {
    if (chatListRef.value) {
      handleMsgScrollTop(0);

      handleRemoveQuoteFocus();
    }
  });
};
const handleScrollToMessage = (messageId: number) => {
  const messageEl = document.querySelector(
    `.chat-msg-item[data-id="${messageId}"]`
  ) as HTMLElement | null;

  if (chatListRef.value && messageEl && messageEl.offsetTop) {
    const scrollTop = messageEl.offsetTop - chatListRef.value.offsetTop - 50;

    handleMsgScrollTop(scrollTop);
    messageEl.classList.add(QUOTE_FOCUS_CLASS);
  }
};
const handleMsgScrollTop = (val: number) => {
  chatListRef.value?.scrollTo({
    top: val,
    behavior: "smooth",
  });
};

// handle editor
const handleFocusEditor = () => {
  handleRemoveQuoteFocus();
  editorComponentRef.value?.focusEditor();
};

// handle remove event trigger
const handleRemoveQuoteFocus = () => {
  const messageEl = document.querySelector(
    `.chat-msg-item.${QUOTE_FOCUS_CLASS}`
  ) as HTMLElement | null;

  if (messageEl) {
    messageEl.classList.remove(QUOTE_FOCUS_CLASS);
  }
};

provide<Ref<number>>("userId", userId);
provide<Ref<Channel | null>>("channelInfo", channelInfo);
provide<Ref<ImageUpload[]>>("imageUploads", imageUploads);
provide<Ref<Message | null>>("messageReply", messageReply);
</script>
<style>
@import "@/assets/css/user/chat/header.css";
@import "@/assets/css/user/chat/main.css";
@import "@/assets/css/user/chat/editor.css";
</style>
