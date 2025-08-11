<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="grid grid-cols-12 gap-4">
        <SlidebarComponent selected="ship" />
        <div
          class="sm:col-start-5 lg:col-start-4 col-start-1 col-end-13 bg-[#fff]"
        >
          <div class="md:px-[24px] px-[18px] py-[24px]">
            <div class="font-bold pb-[18px] border-b-[1px] border-[#b2b2b2]">
              <a href="route('home')" class="text-[#d0011b]"> Trang chủ </a>
              <i class="bi bi-chevron-right mx-[3px]"></i>
              <span class="ml-[4px]">Địa chỉ giao hàng</span>
            </div>
            <div class="mt-[12px]">
              <div class="flex justify-end">
                <button
                  class="w-[130px] h-[38px] border-[1px] text-[white] bg-[#d0011b]"
                  @click="handleCreateAddress()"
                >
                  Thêm mới
                </button>
              </div>
              <div class="mt-[18px] mx-[12px]">
                <div
                  v-for="(item, index) in listAddress"
                  class="sm:flex block items-center justify-between border-b-[1px] pb-[18px] mb-[24px]"
                >
                  <div>
                    <div class="flex gap-4">
                      <div class="font-bold">
                        {{ item.first_name }} {{ item.last_name }}
                      </div>
                      <div class="w-[2px] bg-[#bebebe]"></div>
                      <div>{{ item.phone_number }}</div>
                    </div>
                    <div class="mt-[8px]">{{ item.address }}</div>
                    <div
                      class="mt-[8px] w-[100px] text-[#d0011b] py-[4px] border-[1px] border-[#d0011b] text-center"
                      v-if="item.is_default"
                    >
                      Mặc định
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-end gap-4">
                      <button
                        class="text-[blue]"
                        @click="handleUpdateAddress(item)"
                      >
                        Chỉnh sửa
                      </button>
                      <button
                        class="text-[blue]"
                        @click="handleDeleteAddress(index)"
                      >
                        Xóa
                      </button>
                    </div>
                    <div class="flex justify-end">
                      <button
                        v-if="!item.is_default"
                        class="mt-[8px] w-[150px] text-[#d0011b] py-[6px] border-[1px] border-[#bebebe]"
                        @click="handleSetDefaultAddress(index)"
                      >
                        Thiết lập mặc định
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormComponent ref="refAddressForm" />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SlidebarComponent from "@/components/user/profile/slidebar.vue";
import type { Address } from "@/types/users/address";
import FormComponent from "@/components/user/address-ship/form.vue";

definePageMeta({
  name: "address-ship",
});

const refAddressForm = ref();
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
    location_type: 2,
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

const handleCreateAddress = () => {
  refAddressForm.value.open('create');
}
const handleUpdateAddress = (address: any) => {
  refAddressForm.value.open('update', address);
};
const handleSetDefaultAddress = (index: number) => {
  listAddress.value.forEach((address, i) => {
    address.is_default = i === index;
  });

  listAddress.value[index].is_default = true;
  listAddress.value.sort(
    (a, b) => (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0)
  );

  ElMessage.success({
    message: "Thiết lập mặc định thành công",
    grouping: true,
  });
};
const handleDeleteAddress = (index: number) => {
  ElMessageBox.confirm(
    "Bạn có muốn xóa địa chỉ giao hàng này không?",
    "Xác nhận",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Hủy bỏ",
    }
  ).then(() => {
    const addressSelected = listAddress.value[index];

    listAddress.value.splice(index, 1);

    if (addressSelected.is_default && listAddress.value.length) {
      listAddress.value[0].is_default = true;
    }

    ElMessage.success({
      message: "Xóa địa chỉ giao hàng thành công",
      grouping: true,
    });
  });
};
</script>
