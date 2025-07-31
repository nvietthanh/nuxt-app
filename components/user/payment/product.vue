<template>
  <div class="sm:flex block mt-[18px]">
    <div class="sm:w-[60%] w-[100%] sm:flex sm:justify-between sm:gap-6">
      <div class="flex">
        <a href="product.route">
          <ImageLoading
            :src="product.images[0].url"
            :alt="product.name"
            :is-lazy="false"
            class="w-[60px] aspect-square border-[1px] border-[#b2b2b2]"
          />
        </a>
        <div class="ml-[8px] hidden-two-line">
          <NuxtLink :to="{ name: 'product', params: { id: product.id } }">
            {{ product.name }}
          </NuxtLink>
        </div>
      </div>
      <div class="min-w-[100px]">{{ product.category?.name }}</div>
    </div>
    <div class="flex-1 sm:text-center text-end sm:mr-[0px] mr-[12px]">
      {{
        formatPrice(
          calculateDiscountedPrice(product.price, product.percent_sale)
        )
      }}
    </div>
    <div
      class="flex-1 text-center sm:mr-[0px] mr-[12px] sm:text-center text-end"
    >
      x{{ product.purchase_quantity }}
    </div>
    <div class="sm:block hidden flex-1 text-center text-[#d0021c]">
      {{
        formatPrice(
          calculatePrice(
            product.purchase_quantity,
            product.price,
            product.percent_sale
          )
        )
      }}
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import { formatPrice } from "@/libs/formatter";
import type { ProductCart } from "@/types/users/cart";

defineProps<{ product: ProductCart }>();

const calculatePrice = (
  purchaseQuantity: number,
  price: number,
  percentSale: number
) => {
  const calculateDiscount = calculateDiscountedPrice(price, percentSale);

  return calculateDiscount * purchaseQuantity;
};
const calculateDiscountedPrice = (price: number, percentSale: number) => {
  return price - (price * percentSale) / 100;
};
</script>
