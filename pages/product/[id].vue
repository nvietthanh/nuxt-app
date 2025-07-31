<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div id="product-profile">
        <div class="pb-[12px]">
          <!-- overview component -->
          <OverviewComponent :product="product" />
          <!-- maker component -->
          <MakerComponent :maker="product.maker" />
          <!-- detail and rating component -->
          <InforComponent :product="product" />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import OverviewComponent from "@/components/user/product/overview.vue";
import MakerComponent from "@/components/user/product/maker.vue";
import InforComponent from "@/components/user/product/infor.vue";
import type { ProductDetail } from "@/types/users/product-detail";

definePageMeta({
  name: "product",
});

const product = ref<ProductDetail>({
  id: 1,
  name: "OPPO Reno10 5G 256GB Xanh",
  images: [
    { id: 1, thumbnal_url: null, url: "/images/devices/phone/dienthoai-1.webp" },
    { id: 1, thumbnal_url: null, url: "/images/devices/phone/dienthoai-1.webp" },
  ],
  description: "test",
  price: 8490000,
  stock_quantity: 1200,
  category: { id: 1, name: "Category test" },
  status: "in_stock",
  attributes: [
    { id: 1, name: "Tình trạng", value: "Còn dùng tốt" },
    { id: 1, name: "Gửi từ", value: "TP Hà Nội" },
    {
      id: 1,
      name: "Chú thích thêm",
      value: "Sản phẩm còn mới tương đương ~89%",
    },
  ],
  percent_sale: 5,
  rating: 3.5,
  sold: 511100,
  maker: {
    id: 1,
    name: "Faruiline Official Store",
    image_url: "/images/devices/phone/dienthoai-1.webp",
    percent_rating: 99,
    total_product: 1200,
    joined_at: "2019/11/25",
    last_login_at: "2025/7/24 8:00:00",
  },
});
</script>
