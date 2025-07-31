<template>
  <div>{{ label }}</div>
  <div class="mt-[8px] flex items-center">
    <input
      v-model="model.min"
      type="text"
      placeholder="Từ"
      class="w-[90px] h-[36px] text-[13px]"
      @keyup="handleKeyupPrice($event, 'min')"
    />
    <span class="mx-[8px] text-[18px]">-</span>
    <input
      v-model="model.max"
      type="text"
      placeholder="Đến"
      class="w-[90px] h-[36px] text-[13px]"
      @keyup="handleKeyupPrice($event, 'max')"
    />
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: () => "Khoảng giá",
  }
);

interface PriceRange {
  min: number | null;
  max: number | null;
}

const model = defineModel<PriceRange>() as { value: PriceRange | undefined };

const handleKeyupPrice = (event: Event, field: "min" | "max") => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  if (!value || !model.value) return;

  const numberValue = Number(value.replace(/\D/g, ""));
  if (field === "min") {
    model.value.min = numberValue;
  } else {
    model.value.max = numberValue;
  }
};
</script>
