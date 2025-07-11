<template>
  <el-rate
    v-model="internalRate"
    :disabled="disabled"
    :show-score="false"
    :show-text="false"
    :colors="colors"
    @change="changeRate"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emits = defineEmits(["change"]);

const props = defineProps({
  rate: { type: Number, default: 0 },
  disabled: { type: Boolean, default: true },
  colors: { type: Object, default: () => ["#fb6e30", "#fb6e30", "#fb6e30"] },
});

const internalRate = ref(props.rate);

watch(
  () => props.rate,
  (newVal) => {
    internalRate.value = newVal;
  }
);

const changeRate = (val: Number) => {
  emits("change", val);
};
</script>

<style scoped>
.el-rate :deep(.el-rate__icon) {
  margin-right: 0 !important;
}
:deep(.el-rate__text) {
  margin-left: 8px;
  margin-bottom: -6px;
  font-size: 12px;
}
</style>
