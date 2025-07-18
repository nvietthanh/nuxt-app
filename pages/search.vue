<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="main-tab">
        <div class="grid lg:grid-cols-12 grid-cols-1 lg:gap-4">
          <div class="col-start-1 lg:col-end-4 col-end-5 lg:block hidden">
            <div class="px-[14px] py-[18px] bg-[white]">
              <div class="font-bold text-[16px] flex items-center">
                <i class="bi bi-list-ul mr-[8px] text-[20px]"></i>
                Tất cả danh mục
              </div>
              <div class="mt-[12px] ml-[18px]">
                <div v-for="item in 4" class="mb-[8px]">Thời trang nam</div>
              </div>
            </div>
            <div class="px-[14px] py-[18px] bg-[white]">
              <div class="font-bold text-[16px] flex items-center">
                <i class="bi bi-funnel mr-[8px] text-[16px]"></i>
                Bộ lọc tìm kiếm
              </div>
              <div class="mb-[32px]">
                <div
                  class="mt-[12px] ml-[8px] mb-[18px] pb-[12px] border-b-[1px]"
                >
                  <div>Theo danh mục</div>
                  <div class="mt-[4px]">
                    <div v-for="item in 4">
                      <el-checkbox
                        v-model="filter.sub_category"
                        label="Thời trang nam"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="mt-[12px] ml-[8px] mb-[18px] pb-[24px] border-b-[1px]"
                >
                  <div>Khoảng giá</div>
                  <div class="mt-[8px] flex items-center">
                    <input
                      v-model="filter.price.min"
                      type="text"
                      @keyup="
                        filter.price.min = filter.price.min?.replace(/\D/g, '')
                      "
                      placeholder="Từ"
                      class="w-[90px] h-[36px] text-[13px]"
                    />
                    <span class="mx-[8px] text-[18px]">-</span>
                    <input
                      v-model="filter.price.max"
                      type="text"
                      @keyup="
                        filter.price.max = filter.price.max?.replace(/\D/g, '')
                      "
                      placeholder="Đến"
                      class="w-[90px] h-[36px] text-[13px]"
                    />
                  </div>
                </div>
                <div
                  class="mt-[12px] ml-[8px] mb-[18px] pb-[24px] border-b-[1px]"
                >
                  <div>Đánh giá</div>
                  <div class="mt-[8px] text-[#fb6e30] text-[16px]">
                    <div
                      @click="filter.vote = 5"
                      class="mb-[4px] cursor-pointer"
                    >
                      <div
                        class="flex"
                        :class="{
                          'bg-[#e6e9eb] rounded-[12px]': filter.vote == 5,
                        }"
                      >
                        <i
                          v-for="item in 5"
                          class="bi bi-star-fill ml-[12px]"
                        ></i>
                      </div>
                    </div>
                    <div
                      @click="filter.vote = 4"
                      class="mb-[4px] cursor-pointer"
                    >
                      <div
                        class="flex"
                        :class="{
                          'bg-[#e6e9eb] rounded-[12px]': filter.vote == 4,
                        }"
                      >
                        <i
                          v-for="item in 4"
                          class="bi bi-star-fill ml-[12px]"
                        ></i>
                        <i class="bi bi-star ml-[12px]"></i>
                        <span class="ml-[6px] text-[14px] text-[#000]">
                          (trở lên)
                        </span>
                      </div>
                    </div>
                    <div
                      @click="filter.vote = 3"
                      class="mb-[4px] cursor-pointer"
                    >
                      <div
                        class="flex"
                        :class="{
                          'bg-[#e6e9eb] rounded-[12px]': filter.vote == 3,
                        }"
                      >
                        <i
                          v-for="item in 3"
                          class="bi bi-star-fill ml-[12px]"
                        ></i>
                        <i v-for="item in 2" class="bi bi-star ml-[12px]"></i>
                        <span class="ml-[6px] text-[14px] text-[#000]"
                          >(trở lên)</span
                        >
                      </div>
                    </div>
                    <div
                      @click="filter.vote = 2"
                      class="mb-[4px] cursor-pointer"
                    >
                      <div
                        class="flex"
                        :class="{
                          'bg-[#e6e9eb] rounded-[12px]': filter.vote == 2,
                        }"
                      >
                        <i
                          v-for="item in 2"
                          class="bi bi-star-fill ml-[12px]"
                        ></i>
                        <i v-for="item in 3" class="bi bi-star ml-[12px]"></i>
                        <span class="ml-[6px] text-[14px] text-[#000]"
                          >(trở lên)</span
                        >
                      </div>
                    </div>
                    <div
                      @click="filter.vote = 1"
                      class="mb-[4px] cursor-pointer"
                    >
                      <div
                        class="flex"
                        :class="{
                          'bg-[#e6e9eb] rounded-[12px': filter.vote == 1,
                        }"
                      >
                        <i class="bi bi-star-fill ml-[12px]"></i>
                        <i v-for="item in 4" class="bi bi-star ml-[12px]"></i>
                        <span class="ml-[6px] text-[14px] text-[#000]"
                          >(trở lên)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div @click="searchProduct()" class="w-[100%] cursor-pointer">
                  <div
                    class="text-center cursor-pointer h-[38px] leading-[38px] border-[1px] text-[white] bg-[#d0011b]"
                  >
                    Áp dụng
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-start-4 col-start-5 col-end-13">
            <div class="px-[14px] py-[18px] bg-[white]">
              <div class="mb-[24px] font-bold text-[18px]">
                Từ khóa tìm kiếm:
                <span class="text-[#d0011b]">Sản phẩm nổi tiếng</span>
              </div>
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
              <div
                class="mb-[18px] relative sm:hidden block"
                id="filter-mobile"
              >
                <div
                  @click="openMenuMobile = !openMenuMobile"
                  class="bg-[#000] text-white max-w-[170px] py-[8px] px-[8px] flex justify-center text-center items-center cursor-pointer"
                >
                  <i
                    class="bi bi-chevron-down mr-[12px]"
                    :class="{ 'bi-chevron-up': openMenuMobile }"
                  ></i>
                  Giá thấp đến cao
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
                      <div class="ml-[8px] pb-[18px]">
                        <div class="font-bold">Khoảng giá</div>
                        <div class="mt-[8px] flex items-center">
                          <input
                            v-model="filter.price.min"
                            type="text"
                            @keyup="
                              filter.price.min = filter.price.min.replace(
                                /\D/g,
                                ''
                              )
                            "
                            placeholder="Từ"
                            class="w-[90px] h-[36px] text-[13px]"
                          />
                          <span class="mx-[8px] text-[18px]">-</span>
                          <input
                            v-model="filter.price.max"
                            type="text"
                            @keyup="
                              filter.price.max = filter.price.max.replace(
                                /\D/g,
                                ''
                              )
                            "
                            placeholder="Đến"
                            class="w-[90px] h-[36px] text-[13px]"
                          />
                        </div>
                      </div>
                      <div class="ml-[8px] pb-[18px]">
                        <div class="font-bold">Đánh giá</div>
                        <div class="mt-[4px] text-[16px]">
                          <el-radio-group v-model="filter.vote">
                            <el-radio :label="5" class="w-[100px]"
                              >5 sao</el-radio
                            >
                            <el-radio :label="4" class="w-[100px]"
                              >4 sao (trở lên)</el-radio
                            >
                            <el-radio :label="3" class="w-[100px]"
                              >3 sao (trở lên)</el-radio
                            >
                            <el-radio :label="2" class="w-[100px]"
                              >2 sao (trở lên)</el-radio
                            >
                            <el-radio :label="1" class="w-[100px]"
                              >1 sao (trở lên)</el-radio
                            >
                          </el-radio-group>
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
                    <div class="px-[12px] pb-[12px] mt-[8px] mb-[19px]">
                      <div>OPPO Reno10 5G 256GB Xanh</div>
                      <div class="font-bold my-[4px]">
                        <div class="flex items-end text-[12px]">
                          <div class="line-through">8.490.000₫</div>
                          <div class="text-[14px] ml-[18px] text-[#d0021c]">
                            -5%
                          </div>
                        </div>
                        <div class="text-[#d0021c] text-[14px]">8.490.000₫</div>
                      </div>
                      <div class="flex items-center">
                        <div class="text-[#fb6e30] text-[10px]">
                          <i class="bi bi-star-fill mr-[2px]"></i>
                          <i class="bi bi-star-fill mr-[2px]"></i>
                          <i class="bi bi-star-fill mr-[2px]"></i>
                          <i class="bi bi-star-fill mr-[2px]"></i>
                          <i class="bi bi-star-half mr-[2px]"></i>
                        </div>
                        <span class="ml-[8px] text-[12px]">Đã bán 0k</span>
                      </div>
                    </div>
                  </a>
                </div>
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
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">

interface PriceRange {
  min: string;
  max: string;
}

interface Filter {
  sub_category: string;
  price: PriceRange;
  sort: string;
  vote: number | undefined;
}

const openMenuMobile = ref<boolean>(false);
const filter = ref<Filter>({
  sub_category: "",
  price: {
    min: "",
    max: "",
  },
  sort: "",
  vote: undefined,
});

const searchProduct = () => {
  openMenuMobile.value = false;
};
</script>
