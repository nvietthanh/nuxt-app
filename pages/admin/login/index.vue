<!-- pages/admin/login.vue -->
<script setup lang="ts">
import { ref } from "vue";
import type { FormRules } from "element-plus";
import type { LoginForm } from "@/types/forms/auth/LoginForm";
import { validationMessages } from "@/utils/validation";
import useForm from "@/composables/useForm";

const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

const formData = ref<LoginForm>({
  email: "",
  password: "",
});

const rules = reactive<FormRules<LoginForm>>({
  email: [
    {
      required: true,
      message: validationMessages.required("email"),
      trigger: ["blur", "change"],
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
      trigger: ["blur", "change"],
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

  await $axios.post("/api/v1/login", formData.value);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Admin Login</h2>
      <el-form
        ref="refCustomForm"
        :model="formData"
        :rules="rules"
        label-position="top"
      >
        <el-form-item
          label="Email"
          prop="email"
          :inline-message="$errors.has('email')"
          :error="$errors.first('email')"
        >
          <el-input size="large" v-model="formData.email" placeholder="Email" />
        </el-form-item>
        <el-form-item
          label="Password"
          prop="password"
          :inline-message="$errors.has('password')"
          :error="$errors.first('password')"
        >
          <el-input
            type="password"
            size="large"
            v-model="formData.password"
            placeholder="Password"
            show-password
          />
        </el-form-item>
      </el-form>
      <div class="mt-[3rem] flex justify-center">
        <ElButton
          :loading="loadingForm"
          type="primary"
          size="large"
          class="!w-[120px]"
          @click="doSubmit(handleLogin)"
        >
          Login
        </ElButton>
      </div>
    </div>
  </div>
</template>
