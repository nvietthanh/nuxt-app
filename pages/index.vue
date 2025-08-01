<template>
  <NuxtLayout name="user-layout">
    <template #main>
      <div class="main-home">
        <div id="calrousel-advertist" class="mb-[24px]">
          <el-carousel
            trigger="click"
            type="card"
            autoplay
            :pause-on-hover="true"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <img
                :src="'/images/devices/phone/advertist.webp'"
                alt=""
                class="h-[100%] w-[100%] border-[1px] border-[#8d8d8d] rounded-[4px]"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="categories">
          <div class="mt-[18px] px-[12px] py-[18px] bg-[#ffd400] rounded-[8px]">
            <div class="mb-[18px]">
              <span class="text-[21px] uppercase font-bold">Danh mục</span>
            </div>
            <div class="mb-[12px]">
              <div class="sm:block hidden">
                <el-carousel
                  :autoplay="false"
                  arrow="always"
                  class="md:h-[220px] lg:h-[300px]"
                >
                  <el-carousel-item v-for="item in 4" :key="item">
                    <div class="grid grid-cols-9 gap-2">
                      <div
                        v-for="index in 9"
                        class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
                      >
                        <a href="route('category', 'dien-thoai')">
                          <img
                            :src="'/images/devices/phone/dienthoai-1.webp'"
                            alt=""
                            class="w-[100%]"
                          />
                          <div
                            class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                          >
                            Adidat
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-9 gap-2">
                      <div
                        v-for="index in 9"
                        class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
                      >
                        <a href="route('category', 'dien-thoai')">
                          <img
                            :src="'/images/devices/phone/dienthoai-1.webp'"
                            alt=""
                            class="w-[100%]"
                          />
                          <div
                            class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                          >
                            Adidat
                          </div>
                        </a>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div
                class="sm:hidden block hidden-scroll-mobile overflow-x-scroll"
              >
                <el-carousel :autoplay="false" arrow="always" class="h-[200px]">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <div class="grid grid-cols-5 gap-2">
                      <div
                        v-for="index in 5"
                        class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D4DA]"
                      >
                        <a href="route('category', 'dien-thoai')">
                          <img
                            :src="'/images/devices/phone/dienthoai-1.webp'"
                            alt=""
                            class="w-[100%]"
                          />
                          <div
                            class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                          >
                            Adidat
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                      <div
                        v-for="index in 5"
                        class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
                      >
                        <a href="route('category', 'dien-thoai')">
                          <img
                            :src="'/images/devices/phone/dienthoai-1.webp'"
                            alt=""
                            class="w-[100%]"
                          />
                          <div
                            class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                          >
                            Adidat
                          </div>
                        </a>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
        <div id="product-sales">
          <div class="mt-[18px] px-[12px] py-[18px] bg-[#ff685f] rounded-[8px]">
            <div class="mb-[18px] flex">
              <img :src="'/images/icon/flash.svg'" alt="" class="w-[70px]" />
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
                <a href="route('flashSale')">
                  <div
                    class="px-[24px] py-[12px] bg-[white] text-center rounded-[4px]"
                  >
                    Xem tất cả sản phẩm
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="maker-top">
          <div class="mt-[18px] px-[12px] py-[18px] bg-[white] rounded-[8px]">
            <div class="mb-[18px]">
              <span class="text-[21px] uppercase font-bold">
                Cửa hàng ưu chuộng
              </span>
            </div>
            <div class="mb-[12px]">
              <div
                class="sm:grid hidden md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-4"
              >
                <div
                  v-for="index in 12"
                  class="p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
                >
                  <a href="route('maker', 1)">
                    <img
                      :src="'/images/devices/phone/dienthoai-1.webp'"
                      alt=""
                      class="w-[100%]"
                    />
                    <div
                      class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                    >
                      Adidat
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="sm:hidden flex overflow-x-scroll gap-2 hidden-scroll-mobile"
              >
                <div
                  v-for="index in 12"
                  class="min-w-[130px] p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
                >
                  <a href="route('maker', 1)">
                    <img
                      :src="'/images/devices/phone/dienthoai-1.webp'"
                      alt=""
                      class="w-[100%]"
                    />
                    <div
                      class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                    >
                      Adidat
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-populars">
          <div class="bg-[white] px-[12px] mt-[18px] py-[18px] rounded-[8px]">
            <div class="mb-[18px]">
              <span class="text-[21px] uppercase font-bold"
                >Sản phẩm bán chạy</span
              >
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
        </div>
        <div id="product-sugestion">
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
        </div>
      </div>
      <div class="footer-search mt-[32px]">
        <div class="text-[20px] font-bold">Tìm kiếm nhiều nhất</div>
        <ul class="px-[8px] pb-[18px]">
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới</li>
          <li class="inline-block mr-[24px] mt-[4px]">Báo mới hà nội</li>
        </ul>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ProductCard from "@/components/common/product/card.vue";

definePageMeta({
  name: "home",
});

const productSales = ref<object>();
const productSugestions = ref<object>();
</script>

<style scoped>
:deep(.el-rate .el-rate__icon) {
  font-size: 14px;
}
:deep(.product-sold) {
  font-size: 10px;
}
</style>
