<template>
  <div class="sm:px-[18px] px-[4px] py-[14px] border-b-[1px]">
    <div class="mb-[12px]">
      <div class="flex">
        <NuxtLink :to="{ name: 'product', params: { id: product.id } }">
          <ImageLoading
            :src="product.images[0].url"
            :alt="product.name"
            class="w-[70px] aspect-square border-[1px]"
          />
        </NuxtLink>
        <div class="ml-[12px] flex-1">
          <div class="sm:flex block justify-between">
            <NuxtLink :to="{ name: 'product', params: { id: product.id } }">
              <div class="hidden-two-line">
                {{ product.name }}
              </div>
            </NuxtLink>
            <div class="ml-[18px] text-[14px]">
              <div class="sm:mt-[0px] mt-[8px] text-[#d0021c] text-end">
                {{ formatPrice(product.price) }}
              </div>
              <div class="mt-[2px] text-end">x5</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[8px] flex justify-end text-[14px]">
        <span>Thành tiền:</span>
        <span class="ml-[12px] text-[#d0021c] text-[16px]">
          {{ formatPrice(product.price) }}
        </span>
      </div>
    </div>
    <div class="flex justify-end gap-4">
      <button
        v-if="tabSelected === 'delivered'"
        class="mb-[4px] mt-[8px] w-[120px] text-center h-[38px] text-[white] bg-[#d0011b]"
      >
        Đánh giá
      </button>
      <button
        class="mb-[4px] mt-[8px] w-[160px] text-center h-[38px] border-[1px] border-[#000]"
      >
        Liên hệ người bán
      </button>
      <button
        v-if="
          tabSelected === 'delivered' &&
          product.status === productStatus.IN_STOCK
        "
        class="sm:block hidden mb-[4px] mt-[8px] w-[120px] text-center h-[38px] border-[1px] border-[#000]"
      >
        Mua lại
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import type { ProductOrder } from "@/types/users/order";
import { formatPrice } from "@/libs/formatter";
import { productStatus } from "@/const/product-status";

defineProps<{
  tabSelected: string;
  product: ProductOrder;
}>();
</script>
