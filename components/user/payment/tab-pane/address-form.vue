<template>
  <el-form
    ref="refCustomForm"
    :model="formData"
    :rules="rules"
    label-position="top"
    @keyup.enter.prevent="doSubmit(handleSubmit)"
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
</template>
<script setup lang="ts">
import type { FormRules } from "element-plus";
import type { Address } from "@/types/users/address";

interface DataForm {
  first_name: string | null;
  last_name: string | null;
  phone_number: string | null;
  address: string | null;
  location_type: number;
}

const emits = defineEmits<(e: "created", val: object) => void>();

const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

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

const handleSubmit = async () => {
  emits("created", {
    id: 5,
    first_name: formData.value.first_name,
    last_name: formData.value.last_name,
    phone_number: formData.value.phone_number,
    address: formData.value.address,
    location_type: formData.value.location_type,
  });
};
const submit = () => {
  doSubmit(handleSubmit);
};

defineExpose({ submit });
</script>
