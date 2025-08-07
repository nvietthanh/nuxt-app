<template>
  <NuxtLayout name="guest-layout">
    <div
      class="h-screen py-[2rem] flex justify-center items-center bg-[#ededed]"
    >
      <div class="m-auto form-register w-11/12">
        <div
          class="border-b-[2px] border-[#00000029] px-[30px] py-[18px] text-center text-[#d0011b] font-bold text-[20px]"
        >
          Đăng ký tài khoản
        </div>
        <div class="w-[100%] md:px-[30px] px-[18px] pt-[24px] pb-[32px]">
          <el-form
            ref="refCustomForm"
            :model="formData"
            :rules="rules"
            label-position="top"
            @keyup.enter.prevent="doSubmit(handleRegister)"
          >
            <div class="grid grid-cols-2 md:gap-6 gap-4">
              <el-form-item
                label="Họ"
                prop="first_name"
                :inline-message="$errors.has('first_name')"
                :error="$errors.first('first_name')"
              >
                <el-input v-model="formData.first_name" placeholder="Nhập họ" />
              </el-form-item>
              <el-form-item
                label="Tên"
                prop="last_name"
                :inline-message="$errors.has('last_name')"
                :error="$errors.first('last_name')"
              >
                <el-input v-model="formData.last_name" placeholder="Nhập tên" />
              </el-form-item>
            </div>
            <div class="mb-[8px] md:w-[350px] w-[100%]">
              <el-form-item
                label="Địa chỉ"
                prop="address"
                :inline-message="$errors.has('address')"
                :error="$errors.first('address')"
              >
                <el-input
                  v-model="formData.address"
                  type="email"
                  placeholder="Nhập địa chỉ"
                />
              </el-form-item>
            </div>
            <div class="w-full flex md:gap-6 gap-4">
              <div class="md:min-w-[160px] w-full">
                <el-form-item
                  label="Giới tính"
                  prop="gender"
                  :inline-message="$errors.has('gender')"
                  :error="$errors.first('gender')"
                >
                  <el-select
                    v-model="formData.gender"
                    size="large"
                    placeholder="Giới tính"
                  >
                    <el-option key="1" label="Nam" :value="1" />
                    <el-option key="2" label="Nữ" :value="2" />
                  </el-select>
                </el-form-item>
              </div>
              <div class="md:min-w-[160px] w-full">
                <el-form-item
                  label="Ngày sinh"
                  prop="birthday"
                  :inline-message="$errors.has('birthday')"
                  :error="$errors.first('birthday')"
                >
                  <el-date-picker
                    v-model="formData.birthday"
                    type="date"
                    size="large"
                    placeholder="Nhập ngày sinh"
                    format="YYYY/MM/DD"
                    value-format="YYYY/MM/DD"
                    class="w-[100px]"
                  />
                </el-form-item>
              </div>
            </div>
            <div class="md:flex block md:gap-6 gap-4">
              <div class="md:w-[350px] w-full">
                <el-form-item
                  label="Email"
                  prop="email"
                  :inline-message="$errors.has('email')"
                  :error="$errors.first('email')"
                >
                  <el-input
                    v-model="formData.email"
                    size="large"
                    placeholder="Nhập email"
                  />
                </el-form-item>
              </div>
              <div class="md:w-[350px] w-full">
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
              </div>
            </div>
            <div class="md:w-[350px] w-full">
              <el-form-item
                label="Mật khẩu"
                prop="password"
                :inline-message="$errors.has('password')"
                :error="$errors.first('password')"
              >
                <el-input
                  v-model="formData.password"
                  type="password"
                  size="large"
                  placeholder="Nhập mật khẩu"
                  show-password
                />
              </el-form-item>
            </div>
            <div class="mb-[38px] md:w-[350px] w-full">
              <el-form-item
                label="Xác nhận mật khẩu"
                prop="password_confirmation"
                :inline-message="$errors.has('password_confirmation')"
                :error="$errors.first('password_confirmation')"
              >
                <el-input
                  v-model="formData.password_confirmation"
                  type="password"
                  size="large"
                  placeholder="Nhập mật khẩu xác nhận"
                  show-password
                />
              </el-form-item>
            </div>
            <div class="flex justify-center">
              <el-button
                :loading="loadingForm"
                type="primary"
                size="large"
                class="min-w-[100px]"
                @click="doSubmit(handleRegister)"
              >
                Đăng ký
              </el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { FormRules } from "element-plus";
import { validationMessages } from "@/utils/validation";

definePageMeta({
  name: "register",
});

interface RegisterForm {
  first_name: string | null;
  last_name: string | null;
  address: string | null;
  gender: string | undefined;
  birthday: string | undefined;
  email: string | null;
  phone_number: string | null;
  password: string | null;
  password_confirmation: string | null;
}

const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

const formData = ref<RegisterForm>({
  first_name: null,
  last_name: null,
  address: null,
  gender: undefined,
  birthday: undefined,
  email: null,
  phone_number: null,
  password: null,
  password_confirmation: null,
});

const rules = reactive<FormRules<RegisterForm>>({
  first_name: [
    {
      required: true,
      message: validationMessages.required("first name"),
      trigger: ["change", "blur"],
    },
    {
      max: 255,
      message: validationMessages.maxLength("first name", 255),
      trigger: ["change", "blur"],
    },
  ],
  last_name: [
    {
      required: true,
      message: validationMessages.required("last name"),
      trigger: ["change", "blur"],
    },
    {
      max: 255,
      message: validationMessages.maxLength("last name", 255),
      trigger: ["change", "blur"],
    },
  ],
  address: {
    required: true,
    message: validationMessages.required("address"),
    trigger: ["change", "blur"],
  },
  gender: {
    required: true,
    message: validationMessages.required("gender"),
    trigger: ["change", "blur"],
  },
  birthday: {
    required: true,
    message: validationMessages.required("birthday"),
    trigger: ["change", "blur"],
  },
  email: [
    {
      required: true,
      message: validationMessages.required("email"),
      trigger: ["change", "blur"],
    },
    {
      type: "email",
      message: validationMessages.type.email("email"),
      trigger: ["blur"],
    },
  ],
  phone_number: {
    required: true,
    message: validationMessages.required("phone number"),
    trigger: ["change", "blur"],
  },
  password: {
    required: true,
    message: validationMessages.required("password"),
    trigger: ["change", "blur"],
  },
  password_confirmation: {
    required: true,
    message: validationMessages.required("password confirmation"),
    trigger: ["change", "blur"],
  },
});
const handleRegister = async () => {};
</script>
<style scoped>
::v-deep(.form-register) {
  border-radius: 5px;
  opacity: 1;
  padding: 2px;
  max-width: 600px;
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
}
::v-deep(.form-register .el-input) {
  width: 100%;
}
</style>
