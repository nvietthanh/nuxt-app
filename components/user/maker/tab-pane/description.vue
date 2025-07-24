<template>
  <div class="gap-6 bg-[white] pt-[32px] pb-[64px] sm:px-[32px] px-[18px]">
    <div v-html="description" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ description: string }>();
</script>
