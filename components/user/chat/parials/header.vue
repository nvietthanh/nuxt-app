<template>
  <div class="chat-msg-info">
    <ImageLoading src="" alt="" class="chat-msg-info__img" />
    <div class="chat-msg-info-main">
      <div class="chat-msg-info__name">Thanh test</div>
      <div class="chat-msg-info__status">1 ngày trước</div>
    </div>
  </div>
  <div class="chat-msg-btn-wrap">
    <button class="chat-msg-btn-info" @click="handleShowDetail()">
      <i class="bi bi-info-circle-fill"></i>
    </button>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";

const channelInfo = inject<Ref<null>>("channelInfo", ref(null));

const handleShowDetail = () => {};
</script>
