<template>
  <div id="maker-infor">
    <div class="my-[18px] md:flex block gap-6 bg-[white]">
      <div
        class="h-[100%] flex gap-[12px] py-[18px] sm:px-[18px] px-[8px] mr-[18px]"
      >
        <ImageLoading
          :src="maker.image_url"
          :alt="maker.name"
          class="md:h-[90px] h-[80px] aspect-square rounded-[50%] border-[1px]"
        />
        <div>
          <div>{{ maker.name }}</div>
          <div class="text-[12px]">
            {{ timeAgoFromNow(maker.last_login_at) }}
          </div>
          <div class="flex gap-2 text-[12px] mt-[8px]">
            <button
              class="px-[12px] min-w-[120px] border-[1px] border-[#d0011b] text-[#d0011b] bg-[#ffeee8]"
            >
              <div class="flex justify-center items-center gap-[4px]">
                <i class="bi bi-chat-square-text text-[16px] mr-[4px]" />
                <span>Chat ngay</span>
              </div>
            </button>
            <button
              class="px-[12px] min-w-[120px] border-[1px] border-[#8d8d8d]"
            >
              <NuxtLink :to="{ name: 'maker', params: { id: maker.id } }">
                <div class="flex justify-center items-center gap-[4px]">
                  <i class="bi bi-shop text-[16px] mr-[4px] mb-[2px]"></i>
                  <span>Xem shop</span>
                </div>
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
      <div class="w-[1px] sm:my-[24px] my-[0px] bg-[#e7e7e7] mx-[8px]"></div>
      <div class="flex-1">
        <div
          class="h-[100%] w-[100%] flex items-center py-[18px] sm:px-[18px] px-[24px]"
        >
          <div class="w-[100%] md:flex md:items-start gap-10">
            <div class="w-[30%]">
              <div class="flex">
                <div class="w-[100px]">Đánh giá</div>
                <div>{{ maker.percent_rating }}%</div>
              </div>
              <div class="flex mt-[8px]">
                <div class="w-[100px]">Sản phẩm</div>
                <div>{{ formatCompactNumber(maker.total_product) }}</div>
              </div>
            </div>
            <div>
              <div class="flex">
                <div class="w-[130px]">Ngày tham gia</div>
                <div>{{ maker.joined_at }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import type { MakerShort } from "@/types/users/product-detail";
import { formatCompactNumber, timeAgoFromNow } from "@/libs/formatter";

defineProps<{ maker: MakerShort }>();
</script>
