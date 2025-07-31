<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="grid grid-cols-12 gap-4">
        <SlidebarComponent selected="notice" />
        <div
          class="sm:col-start-5 lg:col-start-4 col-start-1 col-end-13 bg-[#fff]"
        >
          <div class="md:px-[24px] px-[18px] py-[24px]">
            <div class="font-bold pb-[18px] border-b-[1px] border-[#b2b2b2]">
              <a href="route('home')" class="text-[#d0011b]"> Trang chủ </a>
              <i class="bi bi-chevron-right mx-[3px]"></i>
              <span class="ml-[4px]">Thông báo</span>
            </div>
            <div class="mt-[18px]">
              <div>
                <div
                  v-for="item in 4"
                  class="flex justify-between border-b-[1px] mb-[2px] bg-[#ededed] px-[12px] py-[12px]"
                >
                  <div class="flex items-center">
                    <ImageLoading
                      :src="'/images/devices/phone/dienthoai-1.webp'"
                      alt=""
                      class="w-[60px] aspect-square border-[1px]"
                    />
                    <div class="hidden-two-line ml-[8px] sm:mr-[24px] mr-[4px]">
                      Thông báo đơn hàng đang trong quá trình vận chuyển
                    </div>
                  </div>
                  <div
                    class="sm:block hidden h-[32px] leading-[32px] text-[12px] min-w-[120px] text-center bg-[#fff] border-[1px]"
                  >
                    Đánh giá sản phẩm
                  </div>
                </div>
              </div>
              <div class="mt-[18px] flex justify-center">
                <!-- <Paginate @page-change="handleCurrentPage" 
                    :paginate="notices.paginate" 
                    :current-page="notices.filter.page || 1"
                    paginate-background/> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import SlidebarComponent from "@/components/user/profile/slidebar.vue";

definePageMeta({
  name: "notice",
});
</script>

