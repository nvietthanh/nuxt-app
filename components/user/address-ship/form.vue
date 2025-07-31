<template>
  <el-dialog
    v-model="dialogVisible"
    id="address-form"
    class="bg-[#fff] max-h-[90%] overflow-scroll sm:min-w-[500px] sm:max-w-[500px] min-w-[95%] mt-[32px]"
    :show-close="true"
  >
    <template #header>
      <div class="text-center font-bold text-[18px] text-[#d0011b]">
        Cập nhật địa chỉ
      </div>
    </template>
    <el-form
      ref="refCustomForm"
      :model="formData"
      :rules="rules"
      label-position="top"
      @keyup.enter.prevent="doSubmit(handleSubmit)"
      class="px-[16px] mt-[1rem] pb-[32px]"
    >
      <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-3">
        <el-form-item
          label="Họ"
          prop="first_name"
          :inline-message="$errors.has('first_name')"
          :error="$errors.first('first_name')"
        >
          <el-input
            v-model="formData.first_name"
            size="large"
            placeholder="Nhập họ người nhận"
          />
        </el-form-item>
        <el-form-item
          label="Tên"
          prop="last_name"
          :inline-message="$errors.has('last_name')"
          :error="$errors.first('last_name')"
        >
          <el-input
            v-model="formData.last_name"
            size="large"
            placeholder="Nhập tên người nhận"
          />
        </el-form-item>
      </div>
      <el-form-item
        label="Số điện thoại"
        prop="phone_number"
        :inline-message="$errors.has('phone_number')"
        :error="$errors.first('phone_number')"
      >
        <el-input
          v-model="formData.phone_number"
          size="large"
          placeholder="Nhập số điện thoại"
        />
      </el-form-item>
      <el-form-item
        label="Địa chỉ"
        prop="address"
        :inline-message="$errors.has('address')"
        :error="$errors.first('address')"
        class="mt-[18px]"
      >
        <el-input
          v-model="formData.address"
          type="textarea"
          size="large"
          placeholder="Nhập địa chỉ"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="Loại địa chỉ"
        prop="location_type"
        :inline-message="$errors.has('location_type')"
        :error="$errors.first('location_type')"
      >
        <el-radio-group v-model="formData.location_type" size="large">
          <el-radio :value="1" size="large" border>Nhà riêng</el-radio>
          <el-radio :value="2" size="large" border>Văn phòng</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="pb-[12px] pt-[8px]">
        <div class="flex justify-end text-[14px] mr-[24px]">
          <div
            @click="handleCancel()"
            class="cursor-pointer flex justify-center items-center w-[110px] rounded-[4px] bg-[#ffffff] py-[4px] h-[32px] text-[15px] text-black border border-[#7d7f92]"
          >
            Hủy bỏ
          </div>
          <div
            class="cursor-pointer flex justify-center items-center w-[110px] ml-[18px] rounded-[4px] bg-[#d0011b] py-[4px] h-[32px] text-[15px] text-white"
            @click="doSubmit(handleSubmit)"
          >
            Cập nhật
          </div>
        </div>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import type { FormRules } from "element-plus";

interface DataForm {
  first_name: string | null;
  last_name: string | null;
  phone_number: string | null;
  address: string | null;
  location_type: number;
}

const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

const dialogVisible = ref<boolean>(false);
const formData = ref<DataForm>({
  first_name: null,
  last_name: null,
  phone_number: null,
  address: null,
  location_type: 1,
});
const rules = reactive<FormRules<DataForm>>({
  first_name: [
    {
      required: true,
      message: validationMessages.required("first name"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.minLength("first name", 255),
      trigger: ["change"],
    },
  ],
  last_name: [
    {
      required: true,
      message: validationMessages.required("last name"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.minLength("last name", 255),
      trigger: ["change"],
    },
  ],
  phone_number: [
    {
      required: true,
      message: validationMessages.required("phone"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.minLength("phone", 255),
      trigger: ["change"],
    },
  ],
  address: [
    {
      required: true,
      message: validationMessages.required("address"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.minLength("address", 255),
      trigger: ["change"],
    },
  ],
  location_type: [
    {
      required: true,
      message: validationMessages.required("location type"),
      trigger: ["blur"],
    },
  ],
});

const open = () => {
  dialogVisible.value = true;
};
const handleCancel = () => {
  dialogVisible.value = false;
};
const handleSubmit = async () => {};

defineExpose({ open });
</script>
<style>
#address-form .el-dialog__header {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-right: 0 !important;
}
#address-form .main {
  overflow-x: scroll;
}
#address-form .el-dialog__body {
  padding: 0 !important;
}
#address-form .el-dialog__footer {
  padding: 8px 0 !important;
}
#address-form .el-radio.el-radio--large {
  height: 60px;
}
#address-form .el-radio.el-radio--large {
  height: 36px;
}
#address-form .el-radio-group {
  width: 100% !important;
}
</style>
