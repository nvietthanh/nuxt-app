<template>
  <el-carousel trigger="click" type="card" autoplay :pause-on-hover="true">
    <el-carousel-item v-for="item in 4" :key="item">
      <ImageLoading
        src="/images/devices/advertist.webp"
        alt="Advertist"
        class="h-[100%] aspect-square border-[1px] border-[#8d8d8d] rounded-[4px]"
      />
    </el-carousel-item>
  </el-carousel>
</template>
<script setup lang="ts">
import ImageLoading from '@/components/common/image-loading.vue';
</script>
