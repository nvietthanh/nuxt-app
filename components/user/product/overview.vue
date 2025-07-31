<template>
  <div class="bg-[white] py-[18px] px-[12px]">
    <div class="grid md:grid-cols-10 grid-cols-1 gap-6">
      <div class="md:col-start-1 md:col-end-5">
        <ImageLoading
          src="product[0].url"
          alt="product[0].name"
          class="w-full aspect-square border-[1px]"
        />
        <div class="grid grid-cols-5 gap-0">
          <ImageLoading
            v-for="image in product.images"
            :src="image.url"
            :alt="product.name"
            class="border-[1px] aspect-square image-small"
          />
        </div>
      </div>
      <div class="md:col-start-5 md:col-end-11 mt-[4px]">
        <div
          class="border-b-[1px] border-[#bdbdbd] pb-[8px] flex items-center gap-4"
        >
          <div class="flex-1 text-[20px] font-bold">
            {{ product.name }}
          </div>
          <div class="mr-[8px] text-[26px] text-[red]">
            <el-icon><StarFilled /></el-icon>
          </div>
        </div>
        <div class="mb-[4px] mt-[8px] flex items-end">
          <div class="text-[#fb6e30] text-[14px]">
            <span class="underline mr-[4px] text-[16px]">
              {{ product.rating }}
            </span>
            <StarRate :rate="product.rating" />
          </div>
          <div class="bg-[#000] w-[1px] mx-[12px]">&ensp;</div>
          <div>4.4k đánh giá</div>
          <div class="bg-[#000] w-[1px] mx-[12px]">&ensp;</div>
          <div>{{ formatCompactNumber(product.sold) }} lượt bán</div>
        </div>
        <div class="flex items-end font-bold my-[12px] gap-x-[18px]">
          <div
            v-if="product.status === productStatus.IN_STOCK"
            class="flex items-end text-[14px]"
          >
            <div class="line-through">
              {{ formatPrice(product.price) }}
            </div>
          </div>
          <div class="text-[#d0021c] text-[18px]">
            {{ formatPrice(product.price) }}
          </div>
          <div
            v-if="product.status === productStatus.IN_STOCK"
            class="bg-[#d0021c] text-[12px] py-[2px] px-[4px] text-white"
          >
            -{{ product.percent_sale }}% giảm
          </div>
        </div>
        <template v-if="product.status === productStatus.IN_STOCK">
          <div class="flex mt-[18px]">
            <div class="w-[120px]">Còn hàng</div>
            <div>
              {{ formatCompactNumber(product.stock_quantity) }} sản phẩm
            </div>
          </div>
          <div class="product-infor mt-[18px]">
            <div class="flex items-center">
              <div class="w-[120px]">Số lượng</div>
              <div class="flex">
                <button
                  :disabled="isDisableDecreaseCart"
                  class="w-[40px] h-[31px] bg-white text-center text-[14px] border-[1px] border-[#000] disabled:opacity-40"
                  @click="handleDecreaseCart()"
                >
                  <div class="flex justify-center items-center">
                    <el-icon><Minus /></el-icon>
                  </div>
                </button>
                <input
                  type="text"
                  min="1"
                  v-model="formData.quantity"
                  class="w-[60px] h-[31px] text-center text-[14px] z-50"
                  @keyup="handleKeyUpCart()"
                  @change="handleChangeCart()"
                />
                <button
                  :disabled="isDisableIncreaseCart"
                  class="w-[40px] h-[31px] bg-white text-center text-[14px] border-[1px] border-[#000] disabled:opacity-40"
                  @click="handleIncreaseCart()"
                >
                  <div class="flex justify-center items-center">
                    <el-icon><Plus /></el-icon>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="my-[32px] flex gap-2">
            <button
              @click="handleConfirmCart()"
              class="px-[18px] h-[44px] flex items-center border-[1px] border-[#d0011b] text-[#d0011b] bg-[#ffeee8] rounded-[4px]"
            >
              <i class="bi bi-cart-plus text-[20px] mr-[4px]"></i>
              Thêm vào giỏ hàng
            </button>
            <button
              @click="handleBuyNowProduct()"
              class="px-[18px] h-[44px] flex items-center border-[1px] border-[#d0011b] text-[white] bg-[#d0011b] rounded-[4px]"
            >
              <i class="bi bi-cart-plus text-[20px] mr-[4px]"></i>
              Mua ngay
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageLoading from "@/components/common/image-loading.vue";
import StarRate from "@/components/common/product/star-rate.vue";
import { Star, StarFilled, Minus, Plus } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { formatPrice, formatCompactNumber } from "@/libs/formatter";
import { productStatus } from "@/const/product-status";
import type { ProductDetail } from "@/types/users/product-detail";

const props = defineProps<{ product: ProductDetail }>();

interface CartForm {
  product_id: number;
  quantity: number;
}

const route = useRoute();
const cartStore = useCartStore();
const { ensureUser } = useRequireAuth();

const productId = Number(route.params.id);
const formData = ref<CartForm>({
  quantity: 1,
  product_id: productId,
});
const isDisableDecreaseCart = computed(() => {
  return formData.value.quantity <= 1;
});
const isDisableIncreaseCart = computed(() => {
  return formData.value.quantity >= props.product.stock_quantity;
});

const handleDecreaseCart = () => {
  if (formData.value.quantity > 1) {
    formData.value.quantity--;
  }
};
const handleIncreaseCart = () => {
  if (formData.value.quantity <= props.product.stock_quantity) {
    formData.value.quantity++;
  }
};
const handleKeyUpCart = () => {
  formData.value.quantity = Number(
    String(formData.value.quantity).replace(/\D/g, "")
  );
};
const handleChangeCart = () => {
  if (formData.value.quantity > props.product.stock_quantity) {
    formData.value.quantity = props.product.stock_quantity;
  }
};
const handleConfirmCart = () => {
  if (!ensureUser()) return;

  ElMessageBox.confirm(
    "Bạn có muốn thêm sản phẩm vào giỏ hàng không?",
    "Xác nhận",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Hủy bỏ",
    }
  ).then(() => {
    cartStore.addToCart(
      {
        id: props.product.id,
        name: props.product.name,
        images: props.product.images,
        price: props.product.price,
        percent_sale: props.product.percent_sale,
        stock_quantity: props.product.stock_quantity,
        status: props.product.status,
      },
      formData.value.quantity
    );
    ElMessage.success({
      message: "Thêm vào giỏ hàng thành công",
      grouping: true,
    });
  });
};

const handleBuyNowProduct = () => {
  if (!ensureUser()) return;
};
</script>
