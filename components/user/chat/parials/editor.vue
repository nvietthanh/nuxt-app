<template>
  <div class="chat-msg-btn-wrap">
    <div class="chat-msg-btn-file">
      <button class="chat-msg-btn__image-file" @click="triggerFileUpload()">
        <el-icon><PictureFilled /></el-icon>
      </button>
      <input
        ref="fileInputRef"
        type="file"
        accept="image/*"
        multiple
        @change="handleUploadImageFile"
        style="display: none"
      />
    </div>
    <div class="chat-msg-btn__input">
      <el-input
        ref="editorRef"
        v-model="msgContent"
        type="textarea"
        size="large"
        :autosize="{ minRows: 1, maxRows: 5 }"
        placeholder="Nhập nội dung"
        @keydown="handleKeyUp($event)"
      />
    </div>
    <button
      class="chat-msg-btn__send"
      title="Send message"
      @click="handleSendMessage"
      :disabled="isDisableSend"
    >
      <i class="bi bi-cursor"></i>
    </button>
  </div>
</template>
<script setup lang="ts">
import { PictureFilled } from "@element-plus/icons-vue";
import { useMessageStore } from "@/stores/message";
import { MESSAGE_STATUS } from "@/const/message-status";
import type { ImageUpload } from "@/types/users/chat/image-upload";
import { UPLOAD_STATUS } from "@/const/upload-status";
import type { Message } from "@/types/users/chat/message";

const emits = defineEmits<{
  (e: "send-message"): void;
  (e: "upload-image"): void;
}>();

const messageStore = useMessageStore();

const editorRef = ref<HTMLDivElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);

const userId = ref(1);
const msgContent = ref<string | null>(null);

const imageUploads = inject<Ref<ImageUpload[]>>("imageUploads", ref([]));
const messageReply = inject<Ref<Message | null>>("messageReply", ref(null));

const isDisableSend = computed((): boolean => {
  const content = msgContent.value?.trim();
  const hasUploadingImage = imageUploads.value.some(
    (img) => img.status === UPLOAD_STATUS.UPLOADING
  );

  return (
    (!content || content === "") &&
    (imageUploads.value.length === 0 || hasUploadingImage)
  );
});

// upload file
const triggerFileUpload = () => {
  fileInputRef.value?.click();
};
const handleUploadImageFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    const filesArray = Array.from(target.files);

    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageUploads?.value.push({
          file: file,
          preview: e.target?.result as string,
          status: UPLOAD_STATUS.SUCCESS,
        });
      };
      reader.readAsDataURL(file);
    });

    target.value = "";
    emits("upload-image");
  }
};

// send message
const handleSendMessage = () => {
  const content = msgContent.value?.trim();

  if (content || imageUploads.value.length) {
    let attachments = null;

    if (imageUploads.value.length) {
      attachments = [];
      imageUploads.value.forEach((item) => {
        attachments.push({
          id: Date.now(),
          name: item.file?.name,
          url: item.preview,
          attributes: {
            size: 1,
            extension: "image/png",
          },
        });
      });
    }

    messageStore.addMessage({
      id: Date.now(),
      user_id: userId.value,
      content: content ?? null,
      quote: messageReply.value,
      attachments: attachments,
      created_at: new Date().toISOString(),
      status: MESSAGE_STATUS.SENT,
    });

    msgContent.value = null;
    emits("send-message");
  }
};
const handleKeyUp = (event: Event | KeyboardEvent) => {
  const e = event as KeyboardEvent;
  if (e.ctrlKey && e.keyCode === 13) {
    handleSendMessage();
  }
};

const focusEditor = () => {
  editorRef.value?.focus();
};

defineExpose({ focusEditor });
</script>
