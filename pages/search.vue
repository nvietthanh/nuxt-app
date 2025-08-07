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
                  <FilterCategory v-model="filter.category_id" />
                </div>
                <div
                  class="mt-[12px] ml-[8px] mb-[18px] pb-[24px] border-b-[1px]"
                >
                  <FilterPrice v-model="filter.price" />
                </div>
                <div
                  class="mt-[12px] ml-[8px] mb-[18px] pb-[24px] border-b-[1px]"
                >
                  <FilterRate v-model="filter.rate" />
                </div>
                <div @click="handleSearch()" class="w-[100%] cursor-pointer">
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
              <div
                v-if="filter.keyword"
                class="mb-[24px] font-bold text-[18px]"
              >
                Từ khóa tìm kiếm:
                <span class="text-[#d0011b]">{{ filter.keyword }}</span>
              </div>
              <div class="mb-[18px] flex md:gap-4 gap-2 text-[13px]">
                <FilterSort v-model="filter.sort" @change="handleSearch" />
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
                  class="absolute top-[100%] left-0 right-0 block z-[1]"
                  :class="{ hidden: !openMenuMobile }"
                >
                  <div class="mt-[2px] border-[1px] border-[#000] bg-[white]">
                    <div class="px-[12px]">
                      <div class="mt-[12px] ml-[8px] pb-[12px]">
                        <FilterCategory v-model="filter.category_id" />
                      </div>
                      <div class="ml-[8px] pb-[18px]">
                        <div class="font-bold">Khoảng giá</div>
                        <FilterPrice v-model="filter.price" />
                      </div>
                      <div class="ml-[8px] pb-[18px]">
                        <FilterRate v-model="filter.rate" />
                      </div>
                    </div>
                    <div class="flex justify-end cursor-pointer">
                      <button
                        @click="handleSearch()"
                        class="mb-[32px] mr-[32px] w-[120px] text-center h-[38px] border-[1px] text-[white] bg-[#d0011b]"
                      >
                        Áp dụng
                      </button>
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
                <PaginateComponent
                  :paginate="paginate"
                  :current-page="paginateFilter.page"
                  @page-change="handleChangeCurrentPage"
                  paginate-background
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import FilterCategory from "@/components/user/product-filter/category.vue";
import FilterPrice from "@/components/user/product-filter/price.vue";
import FilterRate from "@/components/user/product-filter/rate.vue";
import FilterSort from "@/components/user/product-filter/sort.vue";
import ProductCard from "@/components/common/product/card.vue";
import PaginateComponent from "@/components/user/pagination/paginate.vue";
import type { PaginateFilter } from "@/types/paginate-filter";
import type { Paginate } from "@/types/paginate";
import type { PriceRange } from "@/types/users/product-filter";
import {
  useRoute,
  useRouter,
  type RouteLocationNormalizedLoaded,
} from "vue-router";

interface Filter {
  keyword: string | null;
  category_id: Array<number> | undefined;
  price: PriceRange;
  sort: string;
  rate: number | undefined;
}

const route = useRoute();
const router = useRouter();

const openMenuMobile = ref<boolean>(false);
const paginate = ref<Paginate>({
  per_page: 30,
  total: 3000,
});
const paginateFilter = ref<PaginateFilter>({
  page: 1,
  limit: 30,
});
const filter = ref<Filter>({
  keyword: null,
  category_id: undefined,
  price: {
    min: null,
    max: null,
  },
  sort: "recommend",
  rate: undefined,
});

onMounted(() => {
  updateFilterFromQuery(route.query);

  useSeoMeta({
    title: `Kết quả tìm kiếm ${filter.value.keyword}`,
    description: 'Mua sắm trực tuyến mọi ngành hàng. Giao nhanh, đổi trả dễ, ưu đãi mỗi ngày.',
    keywords: filter.value.keyword ?? "",
  });
});
onBeforeRouteUpdate((to) => {
  updateFilterFromQuery(to.query);
});

const updateFilterFromQuery = (
  query: RouteLocationNormalizedLoaded["query"]
) => {
  const rawCategoryIds = query.category_id;
  let categoryIds = undefined;

  if (Array.isArray(rawCategoryIds)) {
    categoryIds = rawCategoryIds
      .map((id) => parseInt(String(id)))
      .filter(Number.isFinite);
  } else if (typeof rawCategoryIds === "string") {
    categoryIds = [parseInt(rawCategoryIds)].filter(Number.isFinite);
  }

  filter.value = {
    keyword: query.keyword?.toString() ?? null,
    category_id: categoryIds,
    price: {
      min: query.price_min != undefined ? Number(query.price_min) : null,
      max: query.price_max != undefined ? Number(query.price_max) : null,
    },
    sort: query.sort?.toString() ?? "recommend",
    rate: query.rate != undefined ? Number(query.rate) : undefined,
  };
};
const handleChangeCurrentPage = (page: number) => {
  paginateFilter.value.page = page;
};
const handleSearch = () => {
  const query: Record<string, any> = {
    ...(filter.value.keyword && { keyword: filter.value.keyword }),
    ...(filter.value.category_id && {
      category_id: filter.value.category_id,
    }),
    ...(filter.value.sort && { sort: filter.value.sort }),
    ...(filter.value.rate && { rate: filter.value.rate }),
    ...(filter.value.price?.min != null && {
      price_min: filter.value.price.min,
    }),
    ...(filter.value.price?.max != null && {
      price_max: filter.value.price.max,
    }),
    page: 1,
  };

  router.push({ path: route.path, query });
  openMenuMobile.value = false;
};
</script>
