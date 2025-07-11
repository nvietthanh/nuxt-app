<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="main-tab">
        <div class="bg-[white] py-[18px] px-[18px] mb-[32px]">
          <div class="mb-[8px] mt-[12px] text-[20px] font-bold uppercase">
            Danh sách sản phẩm sale
          </div>
          <div
            class="hidden-scroll-mobile sm:grid sm:grid-cols-6 flex overflow-scroll"
          >
            <div
              v-for="(time, index) in listTimeSale"
              class="button text-[#000] min-w-[100px] text-center py-[6px] border-[1px] border-[#bebebe] cursor-pointer"
              :class="{ 'bg-[#d0011b] text-white': index === timeSelect }"
              @click="changeTime(index)"
            >
              <div class="sm:text-[18px] text-[14px]">{{ time.time }}</div>
              <div class="sm:text-[13px] text-[12px]">
                {{ time.status ? "Đang diễn ra" : "Sắp tới" }}
              </div>
            </div>
          </div>
          <div
            class="grid sm:grid-cols-4 lg:grid-cols-5 grid-cols-2 lg:gap-4 mt-[18px]"
          >
            <div
              v-for="index in 8"
              class="bg-[white] border-[1px] rounded-[4px] mb-[12px]"
            >
              <a href="route('product', 1)">
                <img
                  :src="'/images/devices/phone/dienthoai-1.webp'"
                  alt=""
                  class="w-[100%] rounded-t-[4px] border-b-[1px] border-[#D8D9DA]"
                />
              </a>
              <div class="px-[12px] pb-[12px] mt-[8px] min-h-[180px]">
                <a href="route('product', 1)">OPPO Reno10 5G 256GB Xanh</a>
                <div class="font-bold my-[4px]">
                  <div class="flex items-end text-[12px]">
                    <div class="line-through">8.490.000₫</div>
                    <div class="text-[14px] ml-[18px] text-[#d0021c]">-5%</div>
                  </div>
                  <div class="text-[#d0021c] text-[14px]">8.490.000₫</div>
                </div>
                <div class="flex items-center">
                  <div class="text-[#fb6e30] text-[10px]">
                    <StarRate :rate="3" disabled/>
                  </div>
                  <span class="ml-[8px] text-[12px]">Đã bán 0k</span>
                </div>
                <ProgressSale :current="30" :total="100" />
                <div
                  class="relative mt-[8px] flex text-[14px] py-[3px] bg-[#bebebe] justify-center rounded-[12px] w-[100%]"
                >
                  <div
                    class="absolute left-0 top-0 h-[100%] bg-[#d0021c] rounded-l-[12px]"
                    :style="'width: ' + 20 + '%'"
                  ></div>
                  <span class="text-white z-50">Còn lại 10 sản phẩm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import StarRate from '@/components/star-rate.vue';
import ProgressSale from '@/components/progress-sale.vue';

const timeSelect = ref<number>(0);

interface ListTimeItem {
  time: string;
  status: boolean;
}

const listTimeSale = ref<ListTimeItem[]>([
  { time: "12:00", status: true },
  { time: "13:00", status: false },
  { time: "14:00", status: false },
  { time: "15:00", status: false },
  { time: "16:00", status: false },
  { time: "17:00", status: false },
]);

const changeTime = (val: number) => {
  timeSelect.value = val;
};
</script>
<style scoped>
:deep(.el-rate .el-rate__icon) {
  margin-right: 0 !important;
}
</style>
