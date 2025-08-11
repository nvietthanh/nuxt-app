<template>
  <div id="product-infor">
    <div
      class="my-[18px] gap-6 bg-[white] pt-[32px] pb-[64px] sm:px-[32px] px-[18px]"
    >
      <div class="product-default">
        <div class="uppercase text-[18px]">Chi tiết sản phẩm</div>
        <div class="my-[18px]">
          <div class="flex mt-[12px]">
            <div class="w-[150px]">Danh mục</div>
            <div class="flex-1">{{ product.category.name }}</div>
          </div>
          <template v-for="attribute in product.attributes">
            <div class="flex mt-[12px]">
              <div class="w-[150px]">{{ attribute.name }}</div>
              <div class="flex-1">{{ attribute.value }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="product-desc mt-[50px]">
        <div class="uppercase text-[18px]">Mô tả sản phẩm</div>
        <div class="my-[12px] leading-[28px]" v-html="product.description" />
      </div>
    </div>
  </div>
  <div id="product-votes">
    <div class="py-[12px] bg-[white]">
      <div class="gap-6 bg-[white] pt-[18px] pb-[24px] sm:px-[32px] px-[18px]">
        <div class="uppercase text-[18px]">Đánh giá sản phẩm</div>
        <div class="mt-[8px]">
          <div class="border-[1px] bg-[#fffbf8]">
            <div
              class="sm:px-[32px] px-[18px] sm:py-[24px] py-[12px] sm:flex block gap-6"
            >
              <div class="text-[#ee4d2d] mr-[24px]">
                <div class="text-[20px]">
                  <span class="text-[24px]">{{ product.rating }}</span>
                  <span class="mx-[6px]">trên</span>
                  <span class="text-[24px]">5</span>
                </div>
                <StarRate :rate="product.rating" />
              </div>
              <div class="sm:mt-[4px] mt-[12px]">
                <div
                  class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4"
                >
                  <div
                    v-for="(item, index) in tabSortComment"
                    class="px-[20px] py-[4px] flex items-center justify-center rounded-[4px] text-center border-[1px] border-[#8d8d8d]"
                    :class="{
                      'cursor-pointer': commentFilter.sort != item.value,
                      'border-[#ee4d2d] text-[#ee4d2d]':
                        commentFilter.sort == item.value,
                    }"
                    @click="handleChangeSortComment(item.value)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="list-votes" class="mt-[24px]">
            <div
              v-for="item in 4"
              class="flex pt-[18px] pb-[24px] border-b-[1px]"
            >
              <div>
                <ImageLoading
                  :src="comment.creator.image_url"
                  :alt="comment.creator.full_name"
                  class="w-[60px] aspect-square rounded-[50%] border-[1px]"
                />
              </div>
              <div class="ml-[12px]">
                <div class="font-bold">{{ comment.creator.full_name }}</div>
                <StarRate :rate="product.rating" />
                <div class="mt-[8px] break-work">{{ comment.content }}</div>
              </div>
            </div>
            <div class="mt-[18px] flex justify-center">
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
  </div>
</template>
<script setup lang="ts">
import StarRate from "@/components/common/product/star-rate.vue";
import ImageLoading from "@/components/common/image-loading.vue";
import type { ProductDetail } from "@/types/users/product-detail";
import type { PaginateFilter } from "@/types/paginate-filter";
import type { Paginate } from "@/types/paginate";
import PaginateComponent from "@/components/user/pagination/paginate.vue";
import {
  useRoute,
  useRouter,
  type RouteLocationNormalizedLoaded,
} from "vue-router";

defineProps<{ product: ProductDetail }>();

const route = useRoute();
const router = useRouter();

const tabSortComment = ref([
  { label: "Tất cả", value: "all" },
  { label: "5 sao", value: "5" },
  { label: "4 sao", value: "4" },
  { label: "3 sao", value: "3" },
  { label: "2 sao", value: "2" },
  { label: "1 sao", value: "1" },
]);
const comment = ref({
  id: 1,
  content:
    "Vui lòng tham khảo mẫu trước hoặc bảng kích thước để biết kích thước chi tiết. Kích thước tổng thể phần thân dưới của shop là rộng rãi, phần thân trên ôm và rộng.",
  rating: 4.4,
  creator: {
    id: 1,
    full_name: "Alori Fockuaza",
    image_url: null,
  },
});
const paginateFilter = ref<PaginateFilter>({
  page: 1,
  limit: 30,
});
const paginate = ref<Paginate>({
  per_page: 30,
  total: 3000,
});
const commentFilter = ref({
  sort: "all",
});

onMounted(() => {
  updateFilterFromQuery(route.query);
});

const updateFilterFromQuery = (
  query: RouteLocationNormalizedLoaded["query"]
) => {
  commentFilter.value.sort = query.sort ? String(query.sort) : "all";
  paginateFilter.value.page = query.page ? Number(query.page) : 1;
};
const handleChangeSortComment = (val: string) => {
  commentFilter.value.sort = val;
  paginateFilter.value.page = 1;

  handleLoadComment();
};
const handleChangeCurrentPage = (page: number) => {
  paginateFilter.value.page = page;

  handleLoadComment();
};
const handleLoadComment = () => {
  const params = {
    sort: commentFilter.value.sort,
    page: paginateFilter.value.page,
  };

  startLoading();

  router.push({ name: "product", query: params });

  setTimeout(() => {
    stopLoading();
  }, 1000);
};
</script>
