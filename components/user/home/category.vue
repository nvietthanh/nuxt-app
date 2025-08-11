<template>
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
                <NuxtLink
                  :to="{ name: 'search', query: { category_id: index } }"
                >
                  <ImageLoading
                    src="/images/devices/example.webp"
                    alt="Category"
                    class="w-[100%]"
                  />
                  <div
                    class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                  >
                    Adidat
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="grid grid-cols-9 gap-2">
              <div
                v-for="index in 9"
                class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
              >
                <NuxtLink
                  :to="{ name: 'search', query: { category_id: index } }"
                >
                  <ImageLoading
                    src="/images/devices/example.webp"
                    alt="Category"
                    class="w-[100%]"
                  />
                  <div
                    class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                  >
                    Adidat
                  </div>
                </NuxtLink>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sm:hidden block hidden-scroll-mobile overflow-x-scroll">
        <el-carousel :autoplay="false" arrow="always" class="h-[200px]">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="grid grid-cols-5 gap-2">
              <div
                v-for="index in 5"
                class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D4DA]"
              >
                <NuxtLink
                  :to="{ name: 'search', query: { category_id: index } }"
                >
                  <ImageLoading
                    src="/images/devices/example.webp"
                    alt="Category"
                    class="w-[100%]"
                  />
                  <div
                    class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                  >
                    Adidat
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="grid grid-cols-5 gap-2">
              <div
                v-for="index in 5"
                class="md:p-[6px] lg:p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
              >
                <NuxtLink
                  :to="{ name: 'search', query: { category_id: index } }"
                >
                  <ImageLoading
                    src="/images/devices/example.webp"
                    alt="Category"
                    class="w-[100%]"
                  />
                  <div
                    class="mt-[8px] mx-[6px] text-center text-[13px] font-bold break-all"
                  >
                    Adidat
                  </div>
                </NuxtLink>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
</script>
