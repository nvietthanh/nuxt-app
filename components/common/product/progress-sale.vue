<template>
  <div class="progress-sale relative h-full">
    <el-progress
      text-inside
      :show-text="false"
      :percentage="processPercent"
      :stroke-width="28"
      :color="color"
      :track-color="'black'"
      status="exception"
    />
    <div class="absolute left-0 top-0 h-full w-full">
      <div
        class="text-[14px] text-white w-full h-full flex justify-center items-center"
      >
        {{ textProcess }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  current: { type: Number, default: 0 },
  total: { type: Number, default: 1 },
  text: { type: String, default: "Còn lại {value} sản phẩm" },
  color: { type: String, default: "#d0021c" },
});

const textProcess = computed(() => {
  const remaining = props.total - props.current;

  return props.text.replace("{value}", remaining.toString());
});
const processPercent = computed(() => {
  return (props.current / props.total) * 100;
});
</script>
