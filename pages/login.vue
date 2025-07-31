<template>
  <NuxtLayout name="guest-layout">
    <div class="h-screen flex justify-center items-center bg-[#ededed]">
      <div class="m-auto form-login w-11/12">
        <div
          class="border-b-[2px] border-[#00000029] px-[30px] py-[18px] text-center text-[#d0011b] font-bold text-[20px]"
        >
          Đăng nhập
        </div>
        <div class="px-[30px] pt-[24px] pb-[32px]">
          <el-form
            ref="refCustomForm"
            :model="formData"
            :rules="rules"
            label-position="top"
            @keyup.enter.prevent="doSubmit(handleLogin)"
          >
            <el-form-item
              label="Email"
              prop="email"
              :inline-message="$errors.has('email')"
              :error="$errors.first('email')"
            >
              <el-input
                v-model="formData.email"
                type="email"
                size="large"
                placeholder="Nhập email đăng nhập"
              />
            </el-form-item>
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
            <div class="mb-[18px]">
              <NuxtLink :to="{ name: 'forgot-password' }">
                <span class="text-[14px] text-[blue]">Quên mật khẩu?</span>
              </NuxtLink>
            </div>
            <div class="flex justify-center">
              <el-button
                :loading="loadingForm"
                type="primary"
                size="large"
                @click="doSubmit(handleLogin)"
              >
                Đăng nhập
              </el-button>
            </div>
          </el-form>
          <div class="mb-[28px]">
            <div class="flex items-center my-[12px]">
              <div class="flex-1 h-[1px] bg-[#00000029]"></div>
              <span class="mx-[12px] text-[14px]">Hoặc</span>
              <div class="flex-1 h-[1px] bg-[#00000029]"></div>
            </div>
            <div class="flex justify-center">
              <a
                class="mr-[6px] px-[14px] py-[4px] rounded-[4px] border-[1px] border-[#000] flex-1"
              >
                <div class="flex items-center justify-center">
                  <ImageLoading
                    src="/images/social-icon/google-register.svg"
                    alt="Logo Google"
                    class="w-[28px]"
                  />
                  <span class="mt-[2px]">Google</span>
                </div>
              </a>
              <a
                class="ml-[6px] px-[14px] py-[4px] rounded-[4px] border-[1px] border-[#000] flex-1"
              >
                <div class="flex items-center justify-center mt-[2px]">
                  <ImageLoading
                    src="/images/social-icon/facebook_icon.svg.webp"
                    alt="Logo Faceboook"
                    class="w-[22px]"
                  />
                  <span class="mt-[2px] ml-[4px]">Facebook</span>
                </div>
              </a>
            </div>
          </div>
          <div class="flex justify-center">
            <NuxtLink :to="{ name: 'register' }">
              Bạn chưa có tài khoản? <span class="text-[#d0011b]">Đăng ký</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { FormRules } from "element-plus";
import { validationMessages } from "@/utils/validation";
import ImageLoading from "@/components/common/image-loading.vue";
import { useRoute, useRouter } from "vue-router";

definePageMeta({
  name: "login",
});

interface LoginForm {
  email: string | null;
  password: string | null;
  remember?: boolean | null;
}

const router = useRouter();
const route = useRoute();
const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

const formData = ref<LoginForm>({
  email: null,
  password: null,
  remember: false,
});
const rules = reactive<FormRules<LoginForm>>({
  email: [
    {
      required: true,
      message: validationMessages.required("email"),
      trigger: ["blur"],
    },
    {
      type: "email",
      message: validationMessages.type.email("email"),
      trigger: ["blur"],
    },
  ],
  password: [
    {
      required: true,
      message: validationMessages.required("password"),
      trigger: ["blur"],
    },
    {
      min: 8,
      message: validationMessages.minLength("password", 8),
      trigger: ["blur"],
    },
  ],
});

const handleLogin = async () => {
  $errors.clear();

  const redirectUrl = (route.query.redirect as string) || "/";

  router.push(redirectUrl);

  // await $axios.post("/v1/login", formData.value);
};
</script>
<style scoped>
:deep(.form-login) {
  border-radius: 5px;
  opacity: 1;
  padding: 2px;
  max-width: 400px;
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
}
</style>
