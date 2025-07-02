<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * Handle back navigation based on current path
 */
const handleBack = () => {
  if (route.path.startsWith("/admin")) {
    return "/admin/dashboard";
  }

  return "/";
};
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
    <h1 class="text-7xl font-extrabold text-yellow-500 mb-4">403</h1>
    <p class="text-2xl font-semibold text-gray-700 mb-2">Access Denied</p>
    <p class="text-gray-500 mb-6">You don't have permission to access this page.</p>
    <a
      :href="handleBack()"
      class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Back to Home
    </a>
  </div>
</template>
