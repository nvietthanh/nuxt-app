<!-- pages/admin/login.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

const handleLogin = async () => {
  error.value = "";

  if (email.value === "admin@example.com" && password.value === "admin123") {
    localStorage.setItem("admin_logged_in", "true");
    router.push("/admin/dashboard");
  } else {
    error.value = "Email hoặc mật khẩu không đúng";
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form
      @submit.prevent="handleLogin"
      class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
    >
      <h2 class="text-2xl font-bold text-center mb-6">Admin Login</h2>

      <div v-if="error" class="mb-4 text-red-500 text-sm text-center">
        {{ error }}
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          v-model="email"
        />
      </div>

      <div class="mb-6">
        <label
          for="password"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          v-model="password"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
      >
        Login
      </button>
    </form>
  </div>
</template>
