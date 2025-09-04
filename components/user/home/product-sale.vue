<template>
  <div class="mt-[18px] px-[12px] py-[18px] bg-[#ff685f] rounded-[8px]">
    <div class="mb-[18px] flex">
      <ImageLoading
        src="/images/icons/flash.svg"
        :is-lazy="false"
        alt="Flash sale"
        class="w-[70px]"
      />
      <span
        class="ml-[-10px] mt-[8px] text-[22px] text-[#ffe818] uppercase font-bold"
      >
        Giờ vàng deal sốc
      </span>
    </div>
    <div class="mb-[12px]">
      <div class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4">
        <template v-for="item in 10">
          <ProductCard />
        </template>
      </div>
      <div class="my-[12px] flex justify-center">
        <NuxtLink :to="{ name: 'flash-sale' }">
          <div class="px-[24px] py-[12px] bg-[white] text-center rounded-[4px]">
            Xem tất cả sản phẩm
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from '@/components/common/image-loading.vue';
import ProductCard from '@/components/common/product/card.vue';
</script>