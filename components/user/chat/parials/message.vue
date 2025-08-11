<template>
  <div>
    <div v-if="isMoreThanMinute" class="chat-msg-time">{{ timeAgoReal }}</div>
    <div
      class="chat-msg-item"
      :class="{
        right: isCurrentSend,
        left: !isCurrentSend,
        first: isFirst,
        last: isLast,
      }"
      :data-id="message.id"
    >
      <div class="chat-msg-item-wrap">
        <div v-if="message.quote" class="chat-msg-item__quote">
          <div class="chat-msg-item__quote-reply">
            <i class="bi bi-reply-fill"></i>
            <span>Đã trả lời {{ userId === message.quote.user_id ? 'chính mình' : '' }}</span>
          </div>
          <div
            v-if="message.quote.content !== null"
            class="chat-msg-item__quote-content"
            @click="handleScrollToQuote()"
          >
            {{ message.quote.content }}
          </div>
          <template v-else-if="message.quote.attachments">
            <div
              v-if="message.quote.attachments.length === 1"
              @click="handleScrollToQuote()"
            >
              <ImageLoading
                :src="message.quote.attachments[0].url"
                :alt="message.quote.attachments[0].name"
                class="chat-msg-item__quote-image"
                @click="handleScrollToQuote()"
              />
            </div>
            <div
              v-else
              class="chat-msg-item__quote-content"
              @click="handleScrollToQuote()"
            >
              Đã gửi nhiều ảnh
            </div>
          </template>
        </div>
        <div class="chat-msg-item-main">
          <div v-if="message.content" class="chat-msg-item__content">
            {{ message.content }}
          </div>
          <div v-if="message.attachments" class="chat-msg-item__attachment">
            <ImageLoading
              v-for="(attachment, index) in message.attachments"
              :key="index"
              :src="attachment.url"
              :alt="attachment.name"
              :is-show-preview="true"
              :preview-list="getImagePreviewList(index)"
              class="chat-msg-item__attachment-image"
            />
          </div>
          <div
            v-if="message.status === MESSAGE_STATUS.SENDING"
            class="chat-msg-item__status"
          >
            Đang gửi
          </div>
          <div class="chat-msg-item-btn-wrap">
            <button
              v-if="isCurrentSend"
              class="chat-msg-item-btn__delete"
              @click="handleDeleteMessage()"
            >
              <i class="bi bi-trash-fill"></i>
            </button>
            <button
              class="chat-msg-item-btn__reply"
              @click="handleReplyMessage()"
            >
              <i class="bi bi-reply-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Message } from "@/types/users/chat/message";
import { timeAgo } from "@/libs/chat";
import { MESSAGE_STATUS } from "@/const/message-status";
import ImageLoading from "@/components/common/image-loading.vue";

const props = defineProps<{
  isMoreThanMinute: boolean;
  isCurrentSend: boolean;
  isFirst: boolean;
  isLast: boolean;
  message: Message;
}>();

const emits = defineEmits<{
  (e: "reply-message", mesasgeId: number): void;
  (e: "delete-message", mesasgeId: number): void;
  (e: "scroll-quote-message", quoteMessageId: number): void;
}>();

let intervalId: number;
const timeAgoReal = ref<string>(timeAgo(props.message.created_at));
const userId = inject<Ref<number>>("userId");

watch(
  () => props.message,
  (newVal) => {
    timeAgoReal.value = timeAgo(newVal.created_at);
  }
);

onMounted(() => {
  intervalId = window.setInterval(() => {
    timeAgoReal.value = timeAgo(props.message.created_at);
  }, 600);

  timeAgoReal.value = timeAgo(props.message.created_at);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

// get list image preview
const getImagePreviewList = (valIndex: number): string[] => {
  if (
    props.message.attachments === null ||
    props.message.attachments?.length === 0
  )
    return [];

  let previews = [props.message.attachments[valIndex].url];

  props.message.attachments.forEach((item, index) => {
    if (index === valIndex) return;

    previews.push(item.url);
  });

  return previews;
};

// handle reply message
const handleReplyMessage = () => {
  emits("reply-message", props.message.id);
};
// handle delete message
const handleDeleteMessage = () => {
  ElMessageBox.confirm(
    "Bạn chắc chắn muốn xóa tin nhắn này không?",
    "Xác nhận",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Hủy bỏ",
    }
  ).then(() => {
    emits("delete-message", props.message.id);
  });
};
// handle scroll to message quote
const handleScrollToQuote = () => {
  if (props.message.quote?.id) {
    emits("scroll-quote-message", props.message.quote.id);
  }
};
</script>
