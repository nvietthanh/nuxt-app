<template>
  <div class="mt-[18px] px-[12px] py-[18px] bg-[white] rounded-[8px]">
    <div class="mb-[18px]">
      <span class="text-[21px] uppercase font-bold"> Cửa hàng ưu chuộng </span>
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
            <ImageLoading
              src="/images/devices/example.webp"
              alt="Maker"
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
      <div class="sm:hidden flex overflow-x-scroll gap-2 hidden-scroll-mobile">
        <div
          v-for="index in 12"
          class="min-w-[130px] p-[12px] bg-[white] rounded-[8px] mb-[12px] border-[1px] border-[#D8D9DA]"
        >
          <a href="route('maker', 1)">
            <ImageLoading
              src="/images/devices/example.webp"
              alt="Maker"
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
</template>
<script setup lang="ts">
import ImageLoading from '~/components/common/image-loading.vue';
</script>