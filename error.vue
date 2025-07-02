<template>
  <NuxtLayout :name="layoutName"></NuxtLayout>
</template>

<script setup lang="ts">
import type { LayoutKey } from '#build';

const props = defineProps<{
  error: {
    statusCode: number;
    statusMessage: string;
  };
}>();

const layoutName: LayoutKey = (() => {
  if (props.error.statusCode === 404) return "404";
  if (props.error.statusCode === 403) return "403";

  return "error";
})() as string;
</script>
