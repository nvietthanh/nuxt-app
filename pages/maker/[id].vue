<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div id="maker-overview" class="bg-[white] py-[18px] px-[12px] mb-[18px]">
        <MakerOverview :maker="maker" />
      </div>
      <div id="maker-main" class="bg-[white] py-[18px] px-[12px] mb-[32px]">
        <el-tabs v-model="tabSelected">
          <el-tab-pane
            v-for="tab in tabs"
            :key="tab.name"
            :label="tab.label"
            :name="tab.name"
          >
            <component :is="tab.component" v-bind="tab.props" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import MakerOverview from "@/components/user/maker/overview.vue";
import TabPaneDescription from "@/components/user/maker/tab-pane/description.vue";
import TabPaneProduct from "@/components/user/maker/tab-pane/product.vue";
import TabPaneProductPopular from "@/components/user/maker/tab-pane/product-popular.vue";
import TabPaneProductSale from "@/components/user/maker/tab-pane/product-sale.vue";
import type { MakerDetail } from "@/types/users/maker-detail";

definePageMeta({
  name: "maker",
});

const tabSelected = ref<any>("description");
const maker = ref<MakerDetail>({
  id: 1,
  name: "Faruiline Official Store",
  description: "Cửa hàng bán đồ trang điểm, trang sức, phụ kiện cho giới trẻ.",
  image_url: "/images/devices/example.webp",
  total_product: 1200,
  total_rating: 4.5,
  follower_count: 120411,
  following_count: 2,
  joined_at: "2019/11/25",
  last_login_at: "2025/7/24 8:00:00",
});
const tabs = ref([
  {
    label: "Giới thiệu",
    name: "description",
    component: TabPaneDescription,
    props: { description: maker.value.description },
  },
  {
    label: "Danh sách sản phẩm",
    name: "product",
    component: TabPaneProduct,
    props: {},
  },
  {
    label: "Sản phẩm nổi bật",
    name: "product-popular",
    component: TabPaneProductPopular,
    props: {},
  },
  {
    label: "Săn sale",
    name: "product-sale",
    component: TabPaneProductSale,
    props: {},
  },
]);

useSeoMeta({
  title: `Cửa hàng ${maker.value.name}`,
  description: cutToMetaDescription(maker.value.description),
  keywords: maker.value.name,
});
</script>
<style scoped>
::v-deep(.el-tabs__item) {
  min-width: 150px;
  font-weight: 600;
  height: 50px;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
::v-deep(#tab-product.el-tabs__item) {
  min-width: 180px;
}
::v-deep(#tab-product-popular.el-tabs__item) {
  min-width: 170px;
}
::v-deep(.el-tabs__item:hover),
::v-deep(.el-tabs__item.is-active) {
  color: #d0011b;
}
::v-deep(.el-tabs__active-bar) {
  background-color: #d0011b;
}
</style>
