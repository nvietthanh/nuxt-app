<template>
  <div class="mt-[18px] px-[12px]">
    <div class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4">
      <template v-for="index in 8">
        <ProductCard />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductCard from "@/components/common/product/card.vue";
</script>
