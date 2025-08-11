<template>
  <div id="notice-icon" class="relative lg:mr-[12px]">
    <div class="cursor-pointer px-[12px] flex justify-center relative">
      <i class="bi bi-bell text-[26px]"></i>
      <div
        class="text-[13px] absolute bottom-[50%] flex items-center justify-center right-0 w-[24px] h-[20px] text-[#d0011b] bg-[#fff] rounded-[50%]"
      >
        1
      </div>
    </div>
    <div id="form-notice" class="py-[12px] text-[#000]">
      <div class="px-[18px] pb-[8px] border-b-[1px] border-[#b2b2b2]">
        Thông báo
      </div>
      <div class="list-notice">
        <div id="list-notice-all">
          <div v-for="item in 6" class="px-[18px] py-[12px] flex">
            <div class="flex items-center">
              <img
                :src="'/images/devices/example.webp'"
                alt=""
                class="w-[50px] h-[50px]"
              />
              <div class="hidden-two-line ml-[8px] sm:mr-[24px] mr-[4px]">
                Thông báo đơn hàng đang trong quá trình vận chuyển
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="mb-[4px] mt-[8px] w-[140px] text-center h-[34px] leading-[34px] border-[1px] text-[white] bg-[#d0011b]"
            @click="handleGoToNotice()"
          >
            Xem tất cả
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps<{ notices: object[] }>();

const router = useRouter();
const { ensureUser } = useRequireAuth();

const handleGoToNotice = () => {
  if (!ensureUser()) return;

  router.push({
    name: "notice",
  });
};
</script>
