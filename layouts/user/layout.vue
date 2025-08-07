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

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Sàn thương mại điện tử` : 'Sàn thương mại điện tử'
  },
  meta: [
    { name: 'description', content: 'Mua sắm trực tuyến mọi ngành hàng. Giao nhanh, đổi trả dễ, ưu đãi mỗi ngày.' },
    { name: 'keywords', content: 'mua sắm online, thương mại điện tử, điện thoại, thời trang, gia dụng' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // Open Graph fallback
    { property: 'og:site_name', content: 'Sàn thương mại điện tử' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://example.com/images/default-og.jpg' },

    // Twitter fallback
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
    { rel: 'apple-touch-icon', href: '/images/logo.png' },
    { rel: 'canonical', href: 'https://example.com' }
  ]
})

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
