<template>
  <NuxtLayout name="guest-layout">
    <div class="h-screen flex justify-center items-center bg-[#ededed]">
      <div class="m-auto forgot-password-form w-11/12">
        <div
          class="border-b-[2px] border-[#00000029] px-[30px] py-[18px] text-center text-[#d0011b] font-bold text-[20px]"
        >
          Quên mật khẩu
        </div>
        <div class="px-[30px] pt-[24px] pb-[32px]">
          <el-form
            ref="refCustomForm"
            :model="formData"
            :rules="rules"
            label-position="top"
            @keyup.enter.prevent="doSubmit(handleForgotPassword)"
          >
            <div class="text-[15px] mb-[12px]">
              Vui lòng nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn
              liên kết đặt lại mật khẩu qua email để cho phép bạn thay đổi mật
              khẩu.
            </div>
            <el-form-item
              prop="email"
              :inline-message="$errors.has('email')"
              :error="$errors.first('email')"
            >
              <el-input v-model="formData.email" placeholder="Nhập email" />
            </el-form-item>
            <div class="flex justify-center mt-[12px]">
              <button
                type="button"
                @click="doSubmit(handleForgotPassword)"
                class="px-[14px] py-[6px] rounded-[4px] bg-[#d0011b] text-white"
              >
                Xác nhận
              </button>
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
  name: "forgot-password",
});

interface ForgotPasswordForm {
  email: string | null;
}

const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

const formData = ref<ForgotPasswordForm>({
  email: null,
});
const rules = reactive<FormRules<ForgotPasswordForm>>({
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
});

const handleForgotPassword = async () => {};
</script>
<style scoped>
:deep(.forgot-password-form) {
  border-radius: 5px;
  opacity: 1;
  padding: 2px;
  max-width: 500px;
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
}
</style>
