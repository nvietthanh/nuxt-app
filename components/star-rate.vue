<template>
  <el-rate
    v-model="internalRate"
    :disabled="disabled"
    :show-score="showScore"
    :text-color="textColor"
    :score-template="scoreTemplate"
    @change="changeRate"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emits = defineEmits(["change"]);

const props = defineProps({
  rate: { type: Number, default: 0 },
  disabled: { type: Boolean, default: false },
  showScore: { type: Boolean, default: false },
  textColor: { type: String, default: "#ff990" },
  scoreTemplate: { type: String, default: "{value}" },
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
