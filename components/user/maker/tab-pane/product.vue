<template>
  <div class="grid lg:grid-cols-9 grid-cols-1 lg:gap-4">
    <div class="col-start-1 lg:col-end-3 col-end-5 lg:block hidden">
      <div class="px-[14px] py-[18px] bg-[white]">
        <div class="font-bold text-[16px] flex items-center">
          <i class="bi bi-list-ul mr-[8px] text-[20px]"></i>
          Tất cả danh mục
        </div>
        <div class="mt-[12px] ml-[18px]">
          <div v-for="item in 4" class="mb-[8px]">Thời trang nam</div>
        </div>
      </div>
    </div>
    <div class="lg:col-start-3 col-start-5 col-end-13">
      <div class="px-[14px] py-[18px] bg-[white]">
        <div class="mb-[18px] flex md:gap-4 gap-2 text-[13px]">
          <div
            @click="filter.sort = 'default'"
            class="md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
            :class="{
              'bg-[#d0011b] text-white': filter.sort == 'default',
            }"
          >
            Đề xuất
          </div>
          <div
            @click="filter.sort = 'created_at'"
            class="md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
            :class="{
              'bg-[#d0011b] text-white': filter.sort == 'created_at',
            }"
          >
            Mới nhất
          </div>
          <div
            @click="filter.sort = 'price_asc'"
            class="flex-1 max-w-[150px] md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
            :class="{
              'bg-[#d0011b] text-white': filter.sort == 'price_asc',
            }"
          >
            Giá cao đến thấp
          </div>
          <div
            @click="filter.sort = 'price_desc'"
            class="flex-1 max-w-[150px] md:py-[8px] py-[4px] md:px-[18px] px-[8px] flex justify-center text-center items-center border-[1px] border-[#000] cursor-pointer"
            :class="{
              'bg-[#d0011b] text-white': filter.sort == 'price_desc',
            }"
          >
            Giá thấp đến cao
          </div>
        </div>
        <div class="mb-[18px] relative sm:hidden block" id="filter-mobile">
          <div
            @click="openMenuMobile = !openMenuMobile"
            class="bg-[#000] text-white max-w-[180px] py-[8px] px-[8px] flex justify-center text-center items-center cursor-pointer"
          >
            <i
              class="bi bi-chevron-down mr-[12px]"
              :class="{ 'bi-chevron-up': openMenuMobile }"
            ></i>
            Phân loại sản phẩm
          </div>
          <div
            class="absolute top-[100%] left-0 right-0 block"
            :class="{ hidden: !openMenuMobile }"
          >
            <div class="mt-[2px] border-[1px] border-[#000] bg-[white]">
              <div class="px-[12px]">
                <div class="mt-[12px] ml-[8px] pb-[12px]">
                  <div class="font-bold">Theo danh mục</div>
                  <div class="mt-[4px]">
                    <div v-for="item in 4">
                      <el-checkbox
                        v-model="filter.sub_category"
                        label="Thời trang nam"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end cursor-pointer">
                <div
                  @click="searchProduct()"
                  class="mb-[32px] mr-[32px] w-[120px] text-center cursor-pointer h-[38px] leading-[38px] border-[1px] text-[white] bg-[#d0011b]"
                >
                  Áp dụng
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
          <template v-for="index in 8">
            <ProductCard />
          </template>
        </div>
        <div class="mt-[18px] mb-[24px] flex justify-center">
          <!-- <Paginate
                @page-change="handleCurrentPage"
                :paginate="paginate"
                :current-page="filter.page || 1"
                paginate-background
            /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductCard from '@/components/common/product/card.vue';

interface PriceRange {
  min: string;
  max: string;
}

interface Filter {
  limit: number;
  page: number;
  sort: string | "default";
  sub_category: string;
  price: PriceRange;
  vote: number | undefined;
}

const openMenuMobile = ref<boolean>(false);
const filter = ref<Filter>({
  limit: 15,
  page: 1,
  sort: "default",
  sub_category: "",
  price: {
    min: "",
    max: "",
  },
  vote: undefined,
});

const searchProduct = () => {};
</script>
