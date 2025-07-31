<template>
  <div
    @click="handleChangeSort('recommend')"
    class="md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
    :class="{
      'bg-[#d0011b] text-white': model === 'recommend',
    }"
  >
    Đề xuất
  </div>
  <div
    @click="handleChangeSort('created_at')"
    class="md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
    :class="{
      'bg-[#d0011b] text-white': model === 'created_at',
    }"
  >
    Mới nhất
  </div>
  <div
    @click="handleChangeSort('price_asc')"
    class="flex-1 max-w-[150px] md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
    :class="{
      'bg-[#d0011b] text-white': model === 'price_asc',
    }"
  >
    Giá cao đến thấp
  </div>
  <div
    @click="handleChangeSort('price_desc')"
    class="flex-1 max-w-[150px] md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
    :class="{
      'bg-[#d0011b] text-white': model === 'price_desc',
    }"
  >
    Giá thấp đến cao
  </div>
</template>
<script setup lang="ts">
const model = defineModel<string>();

const emits = defineEmits<(e: "change", val: string) => void>();

const handleChangeSort = (val: string) => {
  model.value = val;

  emits("change", val);
};
</script>
