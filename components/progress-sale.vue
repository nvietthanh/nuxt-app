<template>
  <div class="relative h-100">
    <el-progress
      text-inside
      :show-text="false"
      :percentage="processPercent"
      :stroke-width="28"
      :color="color"
      status="exception"
    />
    <div class="absolute left-0 top-0 h-100 w-100">
      <div class="flex justify-center items-center text-white text-[14px]">
        {{ textProcess }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  current: { type: Number, default: 0 },
  total: { type: Number, default: 1 },
  text: { type: String, default: "Con lai {value} san pham" },
  color: { type: String, default: "#d0021c" },
});

const textProcess = computed(() => {
  return props.text;
});
const processPercent = computed(() => {
  return (props.current / props.total) * 100;
});
</script>
