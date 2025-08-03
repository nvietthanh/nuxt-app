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

const productSales = ref<object>();
const productSugestions = ref<object>();
</script>

<style scoped>
:deep(.el-rate .el-rate__icon) {
  font-size: 14px;
}
:deep(.product-sold) {
  font-size: 10px;
}
</style>
