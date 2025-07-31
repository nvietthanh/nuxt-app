<template>
  <div id="maker-infor">
    <div
      class="pb-[18px] md:flex block gap-4 bg-[white] border-b-[1px] border-[#b2b2b2]"
    >
      <div
        class="md:w-[420px] sm:w-[380px] w-[100%] sm:pr-[24px] sm:border-r-[1px] border-[#b2b2b2]"
      >
        <div
          class="flex items-center gap-[18px] pt-[18px] pb-[18px] sm:px-[18px] px-[8px] mr-[18px]"
        >
          <div class="w-auto">
            <ImageLoading
              :src="maker.image_url"
              :alt="maker.name"
              :is-lazy="false"
              class="md:h-[100px] h-[80px] aspect-square rounded-[50%] border-[1px]"
            />
          </div>
          <div class="w-auto">
            <div>{{ maker.name }}</div>
            <div class="text-[12px]">
              Online {{ timeAgoFromNow(maker.last_login_at) }}
            </div>
            <div class="flex gap-2 text-[12px] mt-[8px]">
              <div
                class="cursor-pointer px-[12px] h-[32px] flex justify-center items-center border-[1px] border-[#d0011b] text-[#d0011b] bg-[#ffeee8]"
              >
                <i class="bi bi-chat-square-text text-[16px] mr-[4px]"></i>
                Chat ngay
              </div>
            </div>
          </div>
        </div>
        <button
          class="w-full bg-[#d0011b] text-center text-white py-[4px]"
          @click="handleFollow()"
        >
          Theo dõi
        </button>
      </div>
      <div class="flex-1">
        <div
          class="h-[100%] sm:flex block gap-6 mt-[24px] sm:px-[24px] px-[8px]"
        >
          <div class="sm:w-[45%]">
            <div class="flex items-center sm:mb-[12px] mb-[10px]">
              <div class="w-[160px] flex items-end">
                <i class="bi bi-shop text-[16px] mr-[8px]"></i>
                <span>Sản phẩm</span>
              </div>
              <span>{{ formatCompactNumber(maker.total_product) }}</span>
            </div>
            <div class="flex items-center sm:mb-[12px] mb-[10px]">
              <div class="w-[160px] flex items-end">
                <i class="bi bi-star text-[16px] mr-[8px]"></i>
                <span>Đánh giá</span>
              </div>
              <span>{{ maker.total_rating }} sao</span>
            </div>
            <div class="flex items-center sm:mb-[12px] mb-[10px]">
              <div class="ml-[-2px] w-[160px] flex items-end">
                <i class="bi bi-person-add text-[18px] mr-[8px]"></i>
                <span>Người theo dõi</span>
              </div>
              <span>{{ formatCompactNumber(maker.follower_count) }}</span>
            </div>
          </div>
          <div>
            <div class="flex items-center sm:mb-[12px] mb-[10px]">
              <div class="ml-[-2px] w-[160px] flex items-end">
                <i class="bi bi-person-check text-[18px] mr-[8px]"></i>
                <span>Đang theo dõi</span>
              </div>
              <span>{{ formatCompactNumber(maker.following_count) }}</span>
            </div>
            <div class="flex items-center sm:mb-[12px] mb-[10px]">
              <div class="ml-[-2px] w-[160px] flex items-end">
                <i class="bi bi-bag-check text-[18px] mr-[8px]"></i>
                <span>Ngày tham gia</span>
              </div>
              <span>{{ maker.joined_at }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { MakerDetail } from "@/types/users/maker-detail";
import ImageLoading from "@/components/common/image-loading.vue";
import { formatCompactNumber, timeAgoFromNow } from "@/libs/formatter";

defineProps<{ maker: MakerDetail }>();

const handleFollow = () => {
  ElMessageBox.confirm("Bạn có muốn theo dõi tác giả này không?", "Xác nhận", {
    confirmButtonText: "OK",
    cancelButtonText: "Hủy bỏ",
  }).then(() => {
    ElMessage.success({
      message: "Theo dõi tác giả thành công",
      grouping: true,
    });
  });
};
</script>
