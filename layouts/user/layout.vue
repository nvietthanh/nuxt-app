<template>
  <LoadingIndicator v-if="loadingStore.isLoading" />
  <header v-if="isHeader" class="relative" style="z-index: 100">
    <Header />
  </header>
  <main>
    <div class="main" :class="{ 'min-h-[70vh]': isFooter }">
      <div class="main-tab">
        <slot name="main" />
      </div>
    </div>
  </main>
  <footer v-if="isFooter" class="bg-[#d0011b]">
    <Footer />
  </footer>
</template>

<script setup lang="ts">
import Header from "./header.vue";
import Footer from "./footer.vue";
import { useLoadingStore } from "@/stores/loading";
import LoadingIndicator from "@/components/common/loading-indicator.vue";

withDefaults(
  defineProps<{
    isFooter?: boolean;
    isHeader?: boolean;
  }>(),
  {
    isFooter: true,
    isHeader: true,
  }
);

const loadingStore = useLoadingStore();
</script>

<style>
@import "@/assets/css/user/__variable.css";
@import "@/assets/css/user/base.css";
</style>
