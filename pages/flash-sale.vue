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
            <template v-for="index in 8">
              <ProductCard>
                <template #content>
                  <ProgressSale :current="30" :total="100" />
                </template>
              </ProductCard>
            </template>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import ProgressSale from "@/components/common/product/progress-sale.vue";
import ProductCard from "@/components/common/product/card.vue";

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
