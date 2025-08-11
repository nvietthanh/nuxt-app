<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="grid grid-cols-12 gap-4">
        <SlidebarComponent selected="order" />
        <div
          class="sm:col-start-5 lg:col-start-4 col-start-1 col-end-13 bg-[#fff]"
        >
          <div class="md:px-[24px] px-[18px] py-[12px]">
            <el-tabs v-model="tabSelected" @tab-change="handleChangeTab">
              <el-tab-pane
                v-for="(item, index) in listTab"
                :key="index"
                :label="item.label"
                :name="item.name"
              />
            </el-tabs>
            <div class="pb-[2rem]">
              <OrderItem
                v-for="item in 6"
                :tab-selected="tabSelected"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SlidebarComponent from "@/components/user/profile/slidebar.vue";
import OrderItem from "@/components/user/order/item.vue";
import type { ProductOrder } from "@/types/users/order";

definePageMeta({
  name: "order",
});

const tabSelected = ref<string>("all");
const listTab = ref([
  {
    label: "Tất cả",
    name: "all",
  },
  {
    label: "Đang chuẩn bị",
    name: "prepare",
  },
  {
    label: "Đang giao hàng",
    name: "shipping",
  },
  {
    label: "Đã giao hàng",
    name: "delivered",
  },
]);
const product = ref<ProductOrder>({
  id: 11,
  name: "Điện thoại Iphone Promax",
  images: [
    {
      id: 1,
      url: "test",
    },
  ],
  price: 1300100,
  percent_sale: 5,
  status: "in_stock",
  purchase_quantity: 3,
});

const handleChangeTab = () => {
  // startLoading()
};
</script>
<style scoped>
::v-deep(.el-tabs__item) {
  min-width: 110px;
  font-weight: 600;
  height: 50px;
  padding-right: 0 !important;
  padding-left: 0 !important;
}
::v-deep(#tab-prepare.el-tabs__item),
::v-deep(#tab-shipping.el-tabs__item),
::v-deep(#tab-deliverd.el-tabs__item) {
  min-width: 150px;
}
::v-deep(.el-tabs__item:hover),
::v-deep(.el-tabs__item.is-active) {
  color: #d0011b;
}
::v-deep(.el-tabs__active-bar) {
  background-color: #d0011b;
}
</style>
