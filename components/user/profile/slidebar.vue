<template>
  <div
    class="col-start-1 sm:col-end-5 lg:col-end-4 col-end-13 bg-[#fff] px-[18px] py-[18px] sm:block hidden"
  >
    <NuxtLink
      v-for="item in menuItems"
      :key="item.key"
      :to="{ name: item.name }"
      class="py-[6px] flex items-center"
      :class="{ 'text-[#d0011b]': selected === item.key }"
    >
      <i :class="`bi ${item.icon} ${item.iconSize} ${item.marginLeft}`"></i>
      <span class="ml-[12px] mt-[2px]">{{ item.label }}</span>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
defineProps<{ selected: string }>();

const menuItems = ref([
  {
    key: "account",
    name: "account",
    icon: "bi-person",
    label: "Tài khoản của tôi",
    iconSize: "text-[20px]",
    marginLeft: "ml-[8px]",
  },
  {
    key: "order",
    name: "order",
    icon: "bi-clipboard2",
    label: "Đơn mua",
    iconSize: "text-[18px]",
    marginLeft: "ml-[9px]",
  },
  {
    key: "notice",
    name: "notice",
    icon: "bi-bell",
    label: "Thông báo",
    iconSize: "text-[18px]",
    marginLeft: "ml-[8px]",
  },
  {
    key: "ship",
    name: "address-ship",
    icon: "bi-truck",
    label: "Địa chỉ giao hàng",
    iconSize: "text-[18px]",
    marginLeft: "ml-[8px]",
  },
]);
</script>
