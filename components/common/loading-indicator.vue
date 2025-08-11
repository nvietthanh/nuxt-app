<!-- components/LoadingIndicator.vue -->
<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-[1000]"
  >
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.8s linear infinite;
}
</style>
