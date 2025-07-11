<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="main-tab">
        <div id="maker-main" class="bg-[white] py-[18px] px-[12px] mb-[18px]">
          <div id="maker-infor">
            <div
              class="pb-[18px] md:flex block gap-4 bg-[white] border-b-[1px] border-[#b2b2b2]"
            >
              <div
                class="md:w-[420px] sm:w-[380px] w-[100%] sm:pr-[24px] sm:border-r-[1px] border-[#b2b2b2]"
              >
                <div
                  class="flex pt-[18px] pb-[18px] sm:px-[18px] px-[8px] mr-[18px]"
                >
                  <img
                    :src="'/images/devices/phone/dienthoai-1.webp'"
                    alt=""
                    class="md:h-[90px] h-[80px] rounded-[50%] border-[1px]"
                  />
                  <div class="ml-[8px]">
                    <div>Faruiline Official Store</div>
                    <div class="text-[12px]">Online 2 Giờ trước</div>
                    <div class="flex gap-2 text-[12px] mt-[8px]">
                      <div
                        class="cursor-pointer px-[12px] h-[32px] flex justify-center items-center border-[1px] border-[#d0011b] text-[#d0011b] bg-[#ffeee8]"
                      >
                        <i
                          class="bi bi-chat-square-text text-[16px] mr-[4px]"
                        ></i>
                        Chat ngay
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="cursor-pointer w-[100%] bg-[#d0011b] text-center text-white py-[4px]"
                >
                  Theo dõi
                </div>
              </div>
              <div class="flex-1">
                <div
                  class="h-[100%] sm:flex block gap-6 mt-[24px] sm:px-[24px] px-[8px]"
                >
                  <div class="sm:w-[45%]">
                    <div class="flex items-center sm:mb-[12px] mb-[10px]">
                      <div class="w-[160px] flex items-end">
                        <i class="bi bi-shop text-[16px] mr-[8px]"></i>
                        Sản phẩm
                      </div>
                      <div>99%</div>
                    </div>
                    <div class="flex items-center sm:mb-[12px] mb-[10px]">
                      <div class="w-[160px] flex items-end">
                        <i class="bi bi-star text-[16px] mr-[8px]"></i>
                        Đánh giá
                      </div>
                      <div>4.9 sao</div>
                    </div>
                    <div class="flex items-center sm:mb-[12px] mb-[10px]">
                      <div class="ml-[-2px] w-[160px] flex items-end">
                        <i class="bi bi-person-add text-[18px] mr-[8px]"></i>
                        Người theo dõi
                      </div>
                      <div>20k</div>
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center sm:mb-[12px] mb-[10px]">
                      <div class="ml-[-2px] w-[160px] flex items-end">
                        <i class="bi bi-person-check text-[18px] mr-[8px]"></i>
                        Đang theo dõi
                      </div>
                      <div>10</div>
                    </div>
                    <div class="flex items-center sm:mb-[12px] mb-[10px]">
                      <div class="ml-[-2px] w-[160px] flex items-end">
                        <i class="bi bi-person-check text-[18px] mr-[8px]"></i>
                        Ngày tham gia
                      </div>
                      <div>16/10/2016</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="maker-default"
          class="bg-[white] py-[18px] px-[12px] mb-[32px]"
        >
          <div id="list-maker-menu" class="overflow-y-scroll">
            <div class="flex sm:border-b-[1px] border-[#b2b2b2]">
              <div
                @click="changeTab('tab_1')"
                class="button min-w-[150px] text-center h-[50px] leading-[50px] cursor-pointer font-bold"
                :class="{
                  'border-[red] text-[#d0011b] border-b-[2px]':
                    tabSelected == 'tab_1',
                }"
              >
                Giới thiệu
              </div>
              <div
                @click="changeTab('tab_2')"
                class="button min-w-[180px] text-center h-[50px] leading-[50px] cursor-pointer font-bold"
                :class="{
                  'border-[red] text-[#d0011b] border-b-[2px]':
                    tabSelected == 'tab_2',
                }"
              >
                Danh sách sản phẩm
              </div>
              <div
                @click="changeTab('tab_3')"
                class="button min-w-[180px] text-center h-[50px] leading-[50px] cursor-pointer font-bold"
                :class="{
                  'border-[red] text-[#d0011b] border-b-[2px]':
                    tabSelected == 'tab_3',
                }"
              >
                Sản phẩm nổi bật
              </div>
              <div
                @click="changeTab('tab_4')"
                class="button min-w-[180px] text-center h-[50px] leading-[50px] cursor-pointer font-bold"
                :class="{
                  'border-[red] text-[#d0011b] border-b-[2px]':
                    tabSelected == 'tab_4',
                }"
              >
                Săn sale
              </div>
            </div>
          </div>
          <div>
            <div v-show="tabSelected == 'tab_1'" id="maker-description">
              <div
                class="gap-6 bg-[white] pt-[32px] pb-[64px] sm:px-[32px] px-[18px]"
              >
                <div class="product-default">
                  <div class="uppercase text-[18px]">Chi tiết sản phẩm</div>
                  <div class="my-[18px]">
                    <div class="flex mt-[12px]">
                      <div class="w-[150px]">Danh mục</div>
                      <div>Điện thoại</div>
                    </div>
                    <div class="flex mt-[12px]">
                      <div class="w-[150px]">Kích cỡ</div>
                      <div>Lớn</div>
                    </div>
                    <div class="flex mt-[12px]">
                      <div class="w-[150px]">Kho hàng</div>
                      <div>Lớn</div>
                    </div>
                    <div class="flex mt-[12px]">
                      <div class="w-[150px]">Năm sản xuất</div>
                      <div>2019</div>
                    </div>
                  </div>
                </div>
                <div class="product-desc mt-[50px]">
                  <div class="uppercase text-[18px]">Chi tiết sản phẩm</div>
                  <div class="my-[12px] leading-[28px]">
                    <div>
                      1. Vui lòng tham khảo mẫu trước hoặc bảng kích thước để
                      biết kích thước chi tiết. Kích thước tổng thể phần thân
                      dưới của shop là rộng rãi, phần thân trên ôm và rộng. Nếu
                      bạn không chắc mình mặc kích cỡ bao nhiêu, bạn có thể cho
                      chúng tôi biết chiều cao và cân nặng của bạn, chúng tôi sẽ
                      tư vấn chuyên nghiệp cho bạn
                    </div>
                    <div>
                      2. Tất cả các sản phẩm được gửi từ Trung Quốc, hàng được
                      gửi đến trung tâm vận chuyển hậu cần quốc tế. Sau khi
                      chúng tôi gửi hàng sẽ không hiển thị ngay, vì chúng tôi
                      cần phải đến trung tâm trung chuyển quốc tế trước, và
                      thông tin hậu cần sẽ hiển thị sau khi nhân viên đăng ký
                      gửi hàng. Xin hãy kiên nhẫn ~~
                    </div>
                    <div>
                      3. Nếu bạn không thể mở lỗ khuy quần jean của mình, hãy
                      yên tâm sử dụng tất cả các quần jean mới từ Trung Quốc đại
                      lục. Đây không phải là một sản phẩm lỗi chưa hoàn thiện,
                      mà là để đảm bảo tính toàn vẹn của sản phẩm ở mức độ cao
                      nhất ~~
                    </div>
                    <div>
                      4. Shop chúng tôi sẽ kiểm tra trước khi giao, tuy nhiên
                      thỉnh thoảng cũng có sơ sót. Ví dụ, hàng nhận được bị lỗi,
                      thiếu sót và các vấn đề về chất lượng sau khi nhận được.
                      Xin vui lòng liên hệ với chúng tôi sớm nhất có thể. Chúng
                      tôi rất chân thành và có trách nhiệm với bạn ~~
                    </div>
                    <div>
                      5. Nếu bạn hài lòng với các sản phẩm và dịch vụ của chúng
                      tôi, xin vui lòng cho chúng tôi 5 sao. Cảm ơn các bạn đã
                      ủng hộ và chúc bạn một cuộc sống vui vẻ ~~
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="tabSelected == 'tab_2'" id="list-product-maker">
              <div class="grid lg:grid-cols-9 grid-cols-1 lg:gap-4">
                <div class="col-start-1 lg:col-end-3 col-end-5 lg:block hidden">
                  <div class="px-[14px] py-[18px] bg-[white]">
                    <div class="font-bold text-[16px] flex items-center">
                      <i class="bi bi-list-ul mr-[8px] text-[20px]"></i>
                      Tất cả danh mục
                    </div>
                    <div class="mt-[12px] ml-[18px]">
                      <div v-for="item in 4" class="mb-[8px]">
                        Thời trang nam
                      </div>
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
                          'bg-[#d0011b] text-white':
                            filter.sort == 'created_at',
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
                          'bg-[#d0011b] text-white':
                            filter.sort == 'price_desc',
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
                        <div
                          class="mt-[2px] border-[1px] border-[#000] bg-[white]"
                        >
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
                          <div
                            class="px-[12px] pb-[12px] mt-[8px] min-h-[150px]"
                          >
                            <div>OPPO Reno10 5G 256GB Xanh</div>
                            <div class="font-bold my-[4px]">
                              <div class="flex items-end text-[12px]">
                                <div class="line-through">8.490.000₫</div>
                                <div
                                  class="text-[14px] ml-[18px] text-[#d0021c]"
                                >
                                  -5%
                                </div>
                              </div>
                              <div class="text-[#d0021c] text-[14px]">
                                8.490.000₫
                              </div>
                            </div>
                            <div class="flex items-center">
                              <div class="text-[#fb6e30] text-[10px]">
                                <i class="bi bi-star-fill mr-[2px]"></i>
                                <i class="bi bi-star-fill mr-[2px]"></i>
                                <i class="bi bi-star-fill mr-[2px]"></i>
                                <i class="bi bi-star-fill mr-[2px]"></i>
                                <i class="bi bi-star-half mr-[2px]"></i>
                              </div>
                              <span class="ml-[8px] text-[12px]"
                                >Đã bán 0k</span
                              >
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
            <div v-show="tabSelected == 'tab_3'" id="list-product-maker">
              <div class="mt-[18px] px-[12px]">
                <div
                  class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4"
                >
                  <div
                    v-for="index in 8"
                    class="bg-[white] rounded-[4px] mb-[12px] border-[1px] border-[#D8D9DA]"
                  >
                    <a href="route('product', 1)">
                      <img
                        :src="'/images/devices/phone/dienthoai-1.webp'"
                        alt=""
                        class="w-[100%] rounded-t-[4px] border-b-[1px] border-[#D8D9DA]"
                      />
                      <div class="px-[12px] pb-[12px] mt-[8px] min-h-[150px]">
                        <div>OPPO Reno10 5G 256GB Xanh</div>
                        <div class="font-bold my-[4px]">
                          <div class="flex items-end text-[12px]">
                            <div class="line-through">8.490.000₫</div>
                            <div class="text-[14px] ml-[18px] text-[#d0021c]">
                              -5%
                            </div>
                          </div>
                          <div class="text-[#d0021c] text-[14px]">
                            8.490.000₫
                          </div>
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
              </div>
            </div>
            <div v-show="tabSelected == 'tab_4'" id="list-product-maker">
              <div class="mt-[18px] px-[12px]">
                <div
                  class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4"
                >
                  <div
                    v-for="index in 8"
                    class="bg-[white] rounded-[4px] mb-[12px] border-[1px] border-[#D8D9DA]"
                  >
                    <a href="route('product', 1)">
                      <img
                        :src="'/images/devices/phone/dienthoai-1.webp'"
                        alt=""
                        class="w-[100%] rounded-t-[4px] border-b-[1px] border-[#D8D9DA]"
                      />
                      <div class="px-[12px] pb-[12px] mt-[8px] min-h-[150px]">
                        <div>OPPO Reno10 5G 256GB Xanh</div>
                        <div class="font-bold my-[4px]">
                          <div class="flex items-end text-[12px]">
                            <div class="line-through">8.490.000₫</div>
                            <div class="text-[14px] ml-[18px] text-[#d0021c]">
                              -5%
                            </div>
                          </div>
                          <div class="text-[#d0021c] text-[14px]">
                            8.490.000₫
                          </div>
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
  limit: number;
  page: number;
  sort: string | "default";
  sub_category: string;
  price: PriceRange;
  vote: number | undefined;
}

const tabSelected = ref<string>("tab_1");
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

const changeTab = (val: string) => {
  tabSelected.value = val;
};
const searchProduct = () => {};
</script>
<style>
#maker-default #list-maker-menu::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#maker-default #list-maker-menu {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
