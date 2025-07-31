<template>
  <el-dialog
    v-model="dialogVisible"
    id="edit-address-pay"
    class="bg-[#fff] max-h-[90%] sm:min-w-[500px] sm:max-w-[500px] min-w-[95%] mt-[32px]"
    :show-close="true"
  >
    <template #header>
      <div class="text-center font-bold text-[18px] text-[#d0011b]">
        {{
          tabSelected == "tab_choose_address"
            ? "Chọn địa chỉ giao hàng"
            : "Thêm địa chỉ mới"
        }}
      </div>
    </template>
    <div class="overflow-y-auto max-h-[500px] min-h-[300px] pb-[32px]">
      <div
        v-if="tabSelected == 'tab_choose_address'"
        class="px-[12px] py-[8px] sm:mx-[12px]"
      >
        <ChooseAddress
          v-model="dataForm.address_id"
          :list-address="listAddress"
          @change-tab="handleChangeTab('tab_create_address')"
        />
      </div>
      <div id="add-address" v-else class="py-[8px] px-[24px] w-[100%]">
        <AddressForm ref="refAddressForm" @created="handleCreatedAddress" />
      </div>
    </div>
    <template #footer>
      <div class="mb-[12px]">
        <div
          v-if="tabSelected == 'tab_choose_address'"
          class="flex justify-end gap-[14px]"
        >
          <button
            class="w-[110px] rounded-[4px] bg-[#ffffff] py-[4px] h-[32px] text-black border border-[#7d7f92]"
            @click="handleCancel()"
          >
            Hủy bỏ
          </button>
          <button
            class="w-[110px] rounded-[4px] bg-[#d0011b] py-[4px] h-[32px] text-white"
            @click="handleChangeAddress()"
          >
            Cập nhật
          </button>
        </div>
        <div
          v-if="tabSelected == 'tab_create_address'"
          class="flex justify-end gap-[14px]"
        >
          <button
            class="w-[110px] rounded-[4px] bg-[#ffffff] py-[4px] h-[32px] text-black border border-[#7d7f92]"
            @click="handleChangeTab('tab_choose_address')"
          >
            Quay lại
          </button>
          <button
            class="w-[110px] rounded-[4px] bg-[#d0011b] py-[4px] h-[32px] text-white"
            @click="handleCreateAddress()"
          >
            Thêm mới
          </button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ChooseAddress from "./tab-pane/choose-address.vue";
import AddressForm from "./tab-pane/address-form.vue";
import type { Address } from "@/types/users/address";

const props = defineProps<{
  addressId?: number;
  listAddress: Address[];
}>();

const emits = defineEmits<{
  (e: "change", addressId?: number): void;
  (e: "created-address", address: Address): void;
}>();

interface DataForm {
  address_id?: number;
  first_name: string | null;
  last_name: string | null;
  title: string | null;
}

const refAddressForm = ref();
const dialogVisible = ref<boolean>(false);
const tabSelected = ref<string>("tab_choose_address");

const dataForm = ref<DataForm>({
  address_id: props.addressId,
  first_name: null,
  last_name: null,
  title: null,
});

const open = () => {
  dialogVisible.value = true;
};
const handleCancel = () => {
  dialogVisible.value = false;
};
const handleChangeTab = (val: string) => {
  tabSelected.value = val;
};
const handleCreateAddress = () => {
  refAddressForm.value.submit();
};
const handleCreatedAddress = (address: any) => {
  emits("created-address", {
    id: address.id,
    first_name: address.first_name,
    last_name: address.last_name,
    phone_number: address.phone_number,
    address: address.address,
    location_type: address.location_type,
    is_default: false,
  });

  tabSelected.value = "tab_choose_address";
  dataForm.value.address_id = address.id;
};
const handleChangeAddress = () => {
  emits("change", dataForm.value.address_id);
};

defineExpose({ open });
</script>
<style>
#edit-address-pay .el-dialog__header {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-right: 0 !important;
}
#edit-address-pay .main {
  overflow-x: scroll;
}
#edit-address-pay .el-dialog__body {
  padding: 0 !important;
}
#edit-address-pay .el-dialog__footer {
  padding: 8px 0 !important;
}
#edit-address-pay .el-radio.el-radio--large {
  height: 60px;
}
#add-address .el-radio.el-radio--large {
  height: 36px;
}
#edit-address-pay .el-radio-group {
  width: 100% !important;
}
</style>
