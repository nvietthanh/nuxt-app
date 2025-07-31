<template>
  <div>{{ label }}</div>
  <div class="mt-[4px]">
    <div v-for="item in 4">
      <el-checkbox-group v-model="model">
        <el-checkbox label="Thời trang nam" :value="item" />
      </el-checkbox-group>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: () => "Theo danh mục",
  }
);

const model = defineModel<Array<number>>();
</script>
