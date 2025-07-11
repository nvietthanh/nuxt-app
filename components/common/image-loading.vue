<template>
  <el-image
    :src="src"
    :lazy="isLazy"
    :fit="fit"
    :alt="alt"
    class="w-[100%]"
  >
    <template #error>
      <div class="image-slot">
        <el-icon><icon-picture /></el-icon>
      </div>
    </template>
  </el-image>
</template>

<script setup lang="ts">
import { Picture as IconPicture } from "@element-plus/icons-vue";

withDefaults(
  defineProps<{
    src: string;
    isLazy?: boolean;
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    alt: string;
  }>(),
  {
    isLazy: true,
    fit: "cover",
  }
);
</script>

<style scoped>
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.image-slot .el-icon {
  font-size: 30px;
}
</style>
