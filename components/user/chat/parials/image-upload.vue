<template>
  <div v-show="imageUploads.length" class="chat-msg-upload">
    <div v-for="(item, index) in imageUploads" class="chat-msg-image">
      <div
        v-if="item?.status === UPLOAD_STATUS.UPLOADING"
        class="loading-container"
      >
        <div class="spinner"></div>
      </div>
      <img
        v-else-if="item?.status === UPLOAD_STATUS.SUCCESS"
        :src="item.preview ?? item.image_url"
        alt=""
      />
      <div v-else class="chat-img-image-fail">Failed</div>
      <button
        v-if="item?.status !== UPLOAD_STATUS.UPLOADING"
        class="chat-msg-image__btn-close"
        @click="handleRemoveImage(index)"
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UPLOAD_STATUS } from "@/const/upload-status";
import type { ImageUpload } from "@/types/users/chat/image-upload";

const imageUploads = inject<Ref<ImageUpload[]>>("imageUploads", ref([]));

const handleRemoveImage = (valIndex: number) => {
  imageUploads.value.splice(valIndex, 1);
};
</script>
