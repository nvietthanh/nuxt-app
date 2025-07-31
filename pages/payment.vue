<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="main-tab">
        <div class="sm:px-[48px] px-[18px] py-[32px] bg-[white]">
          <div
            class="mb-[12px] pb-[24px] border-b-[1px] border-b-[1px] border-[#b2b2b2]"
          >
            <div class="text-[18px] font-bold text-[#d0011b]">
              Địa chỉ nhận hàng
            </div>
            <div class="flex justify-between items-center gap-4">
              <div class="flex-1 mt-[12px] sm:flex block gap-8">
                <div class="font-bold text-[15px]">
                  Nguyễn Viết Thanh - 0358387102
                </div>
                <div>Thôn Đồng Trữ, Phú Nghĩa, Chương Mỹ, Hà Nội</div>
                <div
                  class="sm:mt-[0px] mt-[8px] w-[90px] text-[#d0011b] py-[4px] border-[1px] border-[#d0011b] text-center text-[12px]"
                >
                  Mặc định
                </div>
              </div>
              <div
                @click="handleOpenChangeAddress()"
                class="text-[blue] cursor-pointer border-[1px] border-[blue] px-[12px] py-[4px]"
              >
                Thay đổi
              </div>
            </div>
          </div>
          <div class="mt-[32px]">
            <div
              class="sm:flex hidden items-center font-bold border-[#b2b2b2] pb-[12px]"
            >
              <div class="w-[60%] flex items-center">Sản phẩm</div>
              <div class="flex-1 text-center">Giá tiền</div>
              <div class="flex-1 text-center">Số lượng</div>
              <div class="flex-1 text-center">Thành tiền</div>
            </div>
            <div id="cart-product-payment">
              <div class="border-b-[1px] border-[#b2b2b2] pb-[18px]">
                <ProductItem
                  v-for="(product, index) in listCart"
                  :product="product"
                />
              </div>
              <div class="mt-[18px] sm:flex justify-end items-center">
                <div class="flex justify-between items-center">
                  <div class="sm:text-[16px] text-[14px]">
                    Tổng thanh toán ({{ listCart.length }} sản phẩm):
                  </div>
                  <div class="ml-[24px] text-[20px] text-[#d0021c]">
                    {{ formatPrice(totalPrice) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-[24px] sm:flex block items-center gap-4">
              <div class="font-bold mb-[8px]">Lời nhắn cho người gửi</div>
              <div class="flex-1 max-w-[500px]">
                <el-input
                  v-model="formData.remark"
                  :rows="2"
                  type="textarea"
                  placeholder="Nhập lời nhắn"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-[32px] mt-[24px] sm:flex block justify-between items-center"
          >
            <div>Vui lòng kiểm tra lại đơn hàng trước khi nhấn "mua hàng"</div>
            <div class="flex justify-end">
              <div
                @click="payment()"
                class="button mb-[4px] mt-[8px] cursor-pointer ml-[24px] min-w-[110px] text-center h-[38px] leading-[38px] border-[1px] text-[white] bg-[#d0011b]"
              >
                Mua hàng
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditAddressForm
        ref="editShipForm"
        :address-id="formData.address_id"
        :list-address="listAddress"
        @created-address="handleAddAddress"
      />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import EditAddressForm from "@/components/user/payment/edit-form.vue";
import ProductItem from "@/components/user/payment/product.vue";
import { formatPrice } from "@/libs/formatter";
import type { Address } from "@/types/users/address";
import type { ProductCart } from "@/types/users/cart";

interface DataForm {
  address_id?: number;
  remark: string | null;
}

const editShipForm = ref();
const formData = ref<DataForm>({
  address_id: 1,
  remark: null,
});
const listCart = ref<ProductCart[]>([
  {
    id: 1,
    name: "Điện thoại phổ thông Apple phổ thông Apple phổ thông Apple phổ thông Apple phổ thông Apple",
    images: [
      {
        id: 1,
        thumbnal_url: null,
        url: "test",
      },
    ],
    price: 2000000,
    stock_quantity: 1,
    percent_sale: 10,
    status: "in_stock",
    purchase_quantity: 10,
    category: {
      id: 1,
      name: "Điện thoại",
    },
  },
]);
const listAddress = ref<Address[]>([
  {
    id: 1,
    first_name: "Nguyễn Viết",
    last_name: "Thanh",
    phone_number: "035414151111",
    address: "PN, CM, Hà Nội",
    location_type: 1,
    is_default: true,
  },
  {
    id: 2,
    first_name: "Nguyễn Viết",
    last_name: "Thanh 2",
    phone_number: "035414151111",
    address: "PN, CM, Hà Nội",
    location_type: 1,
    is_default: false,
  },
  {
    id: 3,
    first_name: "Nguyễn Viết",
    last_name: "Thanh 3",
    phone_number: "035414151111",
    address: "PN, CM, Hà Nội",
    location_type: 1,
    is_default: false,
  },
]);

const totalPrice = computed(() =>
  listCart.value.reduce((sum, item) => {
    const discountedPrice = item.price - (item.price * item.percent_sale) / 100;
    return sum + discountedPrice * item.purchase_quantity;
  }, 0)
);

const handleOpenChangeAddress = () => {
  editShipForm.value.open();
};
const handleAddAddress = (address: Address) => {
  listAddress.value.push(address)
}
const handleChangeAddress = (val: Address) => {};
const payment = () => {};
</script>
