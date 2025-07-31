<template>
  <el-radio-group v-model="model" size="large">
    <el-radio
      v-for="(item, index) in listAddress"
      :value="item.id"
      size="large"
      class="w-[100%]"
    >
      <div class="flex">
        <span class="font-bold"
          >{{ item.first_name }} {{ item.last_name }}</span
        >
        <span class="mx-[8px]">-</span>
        <span>{{ item.phone_number }}</span>
      </div>
      <div class="mt-[4px]">{{ item.address }}</div>
    </el-radio>
  </el-radio-group>
  <div class="mt-[24px]">
    <button
      @click="handleChangeTab()"
      class="border-[1px] border-[#bebebe] py-[6px] w-[160px]"
    >
      <div class="flex items-center justify-center">
        <i class="bi bi-plus-circle text-[16px] mr-[6px]"></i>
        <span>Thêm địa chỉ mới</span>
      </div>
    </button>
  </div>
</template>
<script setup lang="ts">
import type { Address } from "@/types/users/address";

const model = defineModel<number | undefined>();

defineProps<{
  listAddress: Address[];
}>();

const emits = defineEmits<(e: "change-tab") => void>();

const handleChangeTab = () => {
  emits("change-tab");
};
</script>
