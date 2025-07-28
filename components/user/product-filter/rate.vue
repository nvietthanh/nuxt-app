<template>
  <div>{{ label }}</div>
  <div class="mt-[8px] text-[#fb6e30] text-[16px]">
    <div @click="model = 5" class="mb-[4px] cursor-pointer">
      <div
        class="flex"
        :class="{
          'bg-[#e6e9eb] rounded-[12px]': model == 5,
        }"
      >
        <i v-for="item in 5" class="bi bi-star-fill ml-[12px]"></i>
      </div>
    </div>
    <div @click="model = 4" class="mb-[4px] cursor-pointer">
      <div
        class="flex"
        :class="{
          'bg-[#e6e9eb] rounded-[12px]': model == 4,
        }"
      >
        <i v-for="item in 4" class="bi bi-star-fill ml-[12px]"></i>
        <i class="bi bi-star ml-[12px]"></i>
        <span class="ml-[6px] text-[14px] text-[#000]"> (trở lên) </span>
      </div>
    </div>
    <div @click="model = 3" class="mb-[4px] cursor-pointer">
      <div
        class="flex"
        :class="{
          'bg-[#e6e9eb] rounded-[12px]': model == 3,
        }"
      >
        <i v-for="item in 3" class="bi bi-star-fill ml-[12px]"></i>
        <i v-for="item in 2" class="bi bi-star ml-[12px]"></i>
        <span class="ml-[6px] text-[14px] text-[#000]">(trở lên)</span>
      </div>
    </div>
    <div @click="model = 2" class="mb-[4px] cursor-pointer">
      <div
        class="flex"
        :class="{
          'bg-[#e6e9eb] rounded-[12px]': model == 2,
        }"
      >
        <i v-for="item in 2" class="bi bi-star-fill ml-[12px]"></i>
        <i v-for="item in 3" class="bi bi-star ml-[12px]"></i>
        <span class="ml-[6px] text-[14px] text-[#000]">(trở lên)</span>
      </div>
    </div>
    <div @click="model = 1" class="mb-[4px] cursor-pointer">
      <div
        class="flex"
        :class="{
          'bg-[#e6e9eb] rounded-[12px': model == 1,
        }"
      >
        <i class="bi bi-star-fill ml-[12px]"></i>
        <i v-for="item in 4" class="bi bi-star ml-[12px]"></i>
        <span class="ml-[6px] text-[14px] text-[#000]">(trở lên)</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: () => "Đánh giá",
  }
);

const model = defineModel<number>();
</script>
