<template>
  <NuxtLayout name="user-layout">
    <template #main>
      <div id="calrousel-advertist">
        <AdvertistComponent />
      </div>
      <div id="categories">
        <CategoryComponent />
      </div>
      <div id="product-sales">
        <ProductSaleComponent />
      </div>
      <div id="maker-top">
        <TopMakerComponent />
      </div>
      <div id="product-populars">
        <ProductPopularComponent />
      </div>
      <div id="product-sugestion">
        <ProductSuggestComponent />
      </div>
      <div class="footer-search mt-[32px]">
        <TopSearchComponent />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import AdvertistComponent from "@/components/user/home/advertist.vue";
import CategoryComponent from "@/components/user/home/category.vue";
import ProductSaleComponent from "@/components/user/home/product-sale.vue";
import TopMakerComponent from "@/components/user/home/top-maker.vue";
import ProductPopularComponent from "@/components/user/home/product-popular.vue";
import ProductSuggestComponent from "@/components/user/home/product-suggest.vue";
import TopSearchComponent from "@/components/user/home/top-search.vue";

definePageMeta({
  name: "home",
});

useSeoMeta({
  title: "Sàn thương mại điện tử - Mua sắm mọi ngành hàng, giá tốt mỗi ngày",
  description:
    "Trang mua sắm trực tuyến uy tín với hàng ngàn sản phẩm từ điện thoại, đồ gia dụng, quần áo, mỹ phẩm đến hàng tiêu dùng. Giao hàng nhanh, đổi trả dễ.",
  keywords:
    "mua sắm online, thương mại điện tử, điện thoại, gia dụng, thời trang, mỹ phẩm",
});
</script>

<style scoped>
:deep(.el-rate .el-rate__icon) {
  font-size: 14px;
}
:deep(.product-sold) {
  font-size: 10px;
}
</style>
