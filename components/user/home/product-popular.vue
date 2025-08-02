<template>
  <div class="bg-[white] px-[12px] mt-[18px] py-[18px] rounded-[8px]">
    <div class="mb-[18px]">
      <span class="text-[21px] uppercase font-bold">Sản phẩm bán chạy</span>
    </div>
    <div class="mb-[12px]">
      <div
        class="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-x-4 gap-y-6"
      >
        <template v-for="index in 12">
          <ProductCard />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductCard from '~/components/common/product/card.vue';
</script>
