<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div id="cart-component">
        <div
          id="cart-product"
          class="sm:px-[48px] px-[18px] py-[32px] bg-[white]"
        >
          <div class="text-[20px] font-bold uppercase text-[#d0011b]">
            Giỏ hàng
          </div>
          <div class="sm:mt-[32px] mt-[24px]">
            <div
              class="sm:flex hidden items-center font-bold border-b-[1px] border-[#b2b2b2] pb-[12px]"
            >
              <div class="w-[55%] flex items-center">
                <el-checkbox
                  v-model="isSelectAll"
                  @change="handleToogleSelectAll()"
                  size="large"
                />
                <span class="ml-[12px]">Sản phẩm</span>
              </div>
              <div class="flex-1 text-center">Giá tiền</div>
              <div class="flex-1 text-center">Số lượng</div>
              <div class="flex-1 text-center">Thành tiền</div>
              <div class="flex-1 text-center">Thao tác</div>
            </div>
            <div class="product">
              <div
                v-if="cartProducts.length == 0"
                class="md:h-[150px] h-[80px] flex items-center justify-center"
              >
                Chưa có sản phẩm nào trong giỏ hàng
              </div>
              <div v-else class="border-b-[1px] border-[#b2b2b2] pb-[18px]">
                <div
                  v-for="(product, index) in cartProducts"
                  class="sm:flex block mt-[18px]"
                >
                  <div
                    class="sm:w-[55%] w-[100%] sm:flex sm:justify-between sm:gap-6"
                  >
                    <div class="flex">
                      <div class="flex items-center">
                        <el-checkbox
                          @change="handleChangeSelect()"
                          v-model="cartSelecteds[index]"
                          size="large"
                        />
                      </div>
                      <ImageLoading
                        :src="product.images[0].thumbnal_url ?? ''"
                        :alt="product.name"
                        :is-lazy="false"
                        class="ml-[8px] min-w-[60px] w-[60px] aspect-square"
                      />
                      <div class="ml-[8px] hidden-two-line">
                        <a href="product.route">{{ product.name }}</a>
                      </div>
                    </div>
                    <div class="min-w-[100px]">Phân loại</div>
                  </div>
                  <div
                    class="flex-1 sm:text-center text-end sm:mr-[0px] mr-[24px]"
                  >
                    {{ formatPrice(product.price) }}
                  </div>
                  <div class="flex-1 text-center sm:mr-[12px] mr-[12px]">
                    <div
                      class="flex sm:justify-normal justify-end sm:my-[0px] my-[8px]"
                    >
                      <button
                        @click="handleDecreaseQuantity(product)"
                        class="w-[30px] h-[31px] bg-white text-center text-[20px] border-[1px] border-[#000]"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        min="1"
                        v-model="product.purchase_quantity"
                        @keyup="handleChangeQuantity(product)"
                        class="w-[50px] h-[31px] text-center border-[1px] border-[#000] text-[14px] z-50"
                      />
                      <button
                        @click="handleIncreaseQuantity(product)"
                        class="w-[30px] h-[31px] bg-white text-center text-[20px] border-[1px] border-[#000]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div
                    class="sm:block hidden flex-1 text-center text-[#d0021c]"
                  >
                    {{ formatPrice(product.purchase_quantity * product.price) }}
                  </div>
                  <div
                    @click="handleRemoveCart(product.id)"
                    class="sm:block hidden flex-1 text-center text-[#d0021c] text-[14px] cursor-pointer"
                  >
                    Xóa
                  </div>
                </div>
              </div>
              <div class="mt-[18px] sm:flex justify-end items-center">
                <div class="flex justify-between items-center">
                  <div class="sm:text-[18px] text-[14px]">
                    Tổng thanh toán ({{ countSelected }} sản phẩm):
                  </div>
                  <div class="ml-[24px] text-[20px] text-[#d0021c]">
                    {{ formatPrice(totalSelectedPrice) }}
                  </div>
                </div>
                <div class="flex justify-end">
                  <button
                    :disabled="countSelected === 0"
                    @click="handlePayment()"
                    class="ml-[24px] w-[110px] text-center h-[38px] border-[1px] text-[white] bg-[#d0011b]"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="suggestion-product" class="sm:mt-[32px] mt-[24px] mb-[48px]">
          <div class="my-[18px] text-[20px] uppercase font-bold">
            Sản phẩm gợi ý
          </div>
          <div class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4">
            <template v-for="index in 9">
              <ProductCard />
            </template>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { formatPrice } from "@/libs/formatter";
import type { ProductCart } from "@/types/users/cart";
import { useCartStore } from "@/stores/cart";
import ProductCard from "@/components/common/product/card.vue";
import ImageLoading from "@/components/common/image-loading.vue";

definePageMeta({
  name: "cart",
});

const cartStore = useCartStore();

cartStore.addToCart({
  id: 1,
  name: "test",
  images: [
    {
      id: 1,
      thumbnal_url: "/test.png",
      url: "/test.png",
    },
  ],
  price: 1111,
  stock_quantity: 4,
  percent_sale: 5,
  status: "in_stock",
});

const cartProducts = computed((): ProductCart[] => {
  return cartStore.items;
});
const isSelectAll = ref(true);
const cartSelecteds = ref<boolean[]>(cartProducts.value.map(() => true));

const countSelected = computed((): number => {
  return cartSelecteds.value.filter((item) => item).length;
});
const totalSelectedPrice = computed((): number => {
  return cartProducts.value.reduce((sum, product, index) => {
    if (cartSelecteds.value[index]) {
      sum += product.price * product.purchase_quantity;
    }
    return sum;
  }, 0);
});

const handleToogleSelectAll = () => {
  if (isSelectAll.value) {
    cartSelecteds.value = cartProducts.value.map(() => true);
  } else {
    cartSelecteds.value = cartProducts.value.map(() => false);
  }
};
const handleChangeSelect = () => {
  isSelectAll.value = countSelected.value === cartSelecteds.value.length;
};
const handleDecreaseQuantity = (product: ProductCart) => {
  if (product.purchase_quantity === 1) {
    ElMessageBox.confirm(
      "Bạn có muốn xóa sản phẩm khỏi giỏ hàng không?",
      "Xác nhận",
      {
        confirmButtonText: "OK",
        cancelButtonText: "Hủy bỏ",
      }
    ).then(() => {
      handleRemoveCart(product.id);
      ElMessage({
        message: "Xóa sản phẩm trong giỏ hàng thành công",
        type: "success",
      });
    });
    return;
  }

  product.purchase_quantity--;
};
const handleIncreaseQuantity = (product: ProductCart) => {
  product.purchase_quantity++;
};
const handleChangeQuantity = (product: ProductCart) => {
  product.purchase_quantity = Number(
    product.purchase_quantity.toString().replace(/\D/g, "")
  );
};
const handleRemoveCart = (productId: number) => {
  cartStore.removeFromCart(productId);
};
const handlePayment = () => {};
</script>
<style scoped>
:deep(#cart-component .el-checkbox__inner) {
  width: 18px !important;
  height: 18px !important;
}
:deep(#cart-component .el-checkbox__inner::after) {
  height: 10px !important;
  left: 6px !important;
}
:deep(#cart-component [type="text"]:focus) {
  --tw-ring-color: #000 !important;
}
:deep(#cart-component .el-checkbox:last-of-type) {
  height: auto;
}
</style>
