<template>
  <div class="bg-[white] rounded-[4px] border-[1px] border-[#D8D9DA]">
    <NuxtLink :to="{ name: 'product', params: { id: product.id } }">
      <ImageLoading
        :src="product.image"
        :alt="product.name"
        class="rounded-t-[4px] aspect-square border-b-[1px] border-[#D8D9DA]"
      />
    </NuxtLink>
    <div class="px-[12px] pb-[12px] min-h-[180px]">
      <NuxtLink :to="{ name: 'product', params: { id: product.id } }">
        {{ product.name }}
      </NuxtLink>
      <div class="font-bold my-[4px]">
        <div class="flex items-end text-[12px]">
          <div class="line-through">{{ formatPrice(product.price) }}</div>
          <div class="text-[14px] ml-[18px] text-[#d0021c]">
            -{{ product.percent_sale }}%
          </div>
        </div>
        <div class="text-[#d0021c] text-[14px]">
          {{ formatPrice(calculateDiscountedPrice) }}
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-[#fb6e30] text-[10px]">
          <StarRate :rate="product.rating" disabled />
        </div>
        <span class="product-sold ml-[8px] text-[11px] mb-[-4px]">
          Đã bán {{ formatValue(product.sold) }}
        </span>
      </div>
      <div class="mt-[6px]">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import StarRate from "@/components/common/product/star-rate.vue";
import type { Product } from "@/types/users/product";
import { formatPrice, formatValue } from "@/libs/formatter";

const props = withDefaults(
  defineProps<{
    product?: Product;
  }>(),
  {
    product: () => ({
      id: 1,
      name: "OPPO Reno10 5G 256GB Xanh",
      price: 8490000,
      image: "/images/devices/phone/dienthoai-1.webp",
      percent_sale: 5,
      rating: 3.5,
      sold: 511100,
    }),
  }
);

const calculateDiscountedPrice = computed(() => {
  const price = props.product.price;
  const percentSale = props.product.percent_sale;

  return price - (price * percentSale) / 100;
});
</script>
