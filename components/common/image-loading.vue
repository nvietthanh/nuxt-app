<template>
  <el-image
    :src="src ?? undefined"
    :lazy="isLazy"
    :fit="fit"
    :alt="alt"
    :zoom-rate="1.2"
    :max-scale="4"
    :min-scale="0.5"
    :preview-src-list="previewSrcList"
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

const props = withDefaults(
  defineProps<{
    src: string | null;
    isLazy?: boolean;
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    alt: string;
    isShowPreview?: boolean;
    previewList?: string[];
  }>(),
  {
    isLazy: true,
    fit: "cover",
    isShowPreview: false,
    previewList: () => [],
  }
);

const previewSrcList = computed((): string[] => {
  if (!props.isShowPreview) return [];

  if (props.previewList.length === 0 && props.src) {
    return [props.src];
  }

  return props.previewList;
});
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
