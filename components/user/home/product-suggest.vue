<template>
  <div class="px-[12px] mt-[18px] py-[18px] rounded-[8px]">
    <div class="mb-[18px]">
      <span class="text-[21px] uppercase font-bold">Gợi ý hôm nay</span>
    </div>
    <div>
      <div class="grid grid-cols-4 md:gap-4 gap-2 mb-[18px]">
        <div
          class="flex text-center justify-center items-center cursor-pointer bg-[white] py-[12px] px-[6px] rounded-[8px] border-[1px] border-[#D8D9DA]"
        >
          Dành cho bạn
        </div>
        <div
          class="flex text-center justify-center items-center cursor-pointer bg-[white] py-[12px] px-[6px] rounded-[8px] border-[1px] border-[#D8D9DA]"
        >
          Laptop
        </div>
        <div
          class="flex text-center justify-center items-center cursor-pointer bg-[white] py-[12px] px-[6px] rounded-[8px] border-[1px] border-[#D8D9DA]"
        >
          Điện thoại
        </div>
        <div
          class="flex text-center justify-center items-center cursor-pointer bg-[white] py-[12px] px-[6px] rounded-[8px] border-[1px] border-[#D8D9DA]"
        >
          Phụ kiện giá sốc
        </div>
      </div>
      <div class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4">
        <template v-for="item in 10">
          <ProductCard />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductCard from '@/components/common/product/card.vue';
</script>
