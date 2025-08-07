<template>
  <div class="h-full bg-[#d0011b] text-[#fff]">
    <div
      class="header-menu flex justify-between items-center text-[14px] gap-[14px]"
    >
      <div class="header-menu-message flex-1">
        <a href=""> Message thông báo có sản phẩm mới bạn tìm xem </a>
      </div>
      <div class="flex items-center button">
        <div v-if="user" id="header-menu" class="relative cursor-pointer">
          <div class="flex items-center">
            <i class="bi bi-person text-[18px]"></i>
            <span class="ml-[4px]">{{ user?.name }}</span>
          </div>
          <div id="list-menu" class="text-[#000] w-[215px]">
            <div class="px-[16px] py-[8px]">
              <a href="route('cart')" class="py-[4px] flex items-center">
                <i class="bi bi-cart text-[20px]"></i>
                <span class="ml-[12px]">Giỏ hàng</span>
              </a>
              <a
                href="route('buyer.profile')"
                class="py-[4px] flex items-center"
              >
                <i class="bi bi-person text-[20px]"></i>
                <span class="ml-[12px]">Thông tin cá nhân</span>
              </a>
              <a href="route('buyer.order')" class="py-[4px] flex items-center">
                <i class="bi bi-bag text-[18px]"></i>
                <span class="ml-[12px]">Quản lý đơn hàng</span>
              </a>
              <a
                href="route('maker.purchase-order')"
                class="py-[4px] flex items-center"
              >
                <i class="bi bi-shop text-[18px]"></i>
                <span class="ml-[12px]">Quản lý trang bán hàng</span>
              </a>
              <div @click="handleLogout()" class="py-[4px] flex items-center">
                <i class="bi bi-box-arrow-left text-[18px]"></i>
                <span class="ml-[12px]">Đăng xuất</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <NuxtLink :to="{ name: 'login' }"> Đăng nhập </NuxtLink>
          <div class="w-[1px] h-[14px] bg-[#fff] mx-[8px]"></div>
          <NuxtLink :to="{ name: 'register' }"> Đăng ký </NuxtLink>
        </div>
      </div>
    </div>
    <div class="h-[50px] md:h-[60px]">
      <div class="header-main">
        <div class="flex justify-between items-center mr-[12px]">
          <NuxtLink :to="{ name: 'home' }" class="hidden md:block">
            <div class="flex justify-between items-center">
              <!-- <img
                :src="'/images/logo/logo.png'"
                alt="Logo trang web"
                class="h-[60px]"
              /> -->
              <div class="w-[60px]">LOGO</div>
              <div
                class="lg:block hidden w-[2px] h-[24px] bg-[#fff] ml-[4px] mr-[12px]"
              ></div>
              <div class="lg:block hidden uppercase text-[16px]">
                Trang bán điện thoại
              </div>
            </div>
          </NuxtLink>
          <div class="block md:hidden" @click="toogleMenu(true)">
            <i class="bi bi-list text-[36px]"></i>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="sm:w-[500px] lg:w-[400px] sm:mr-[32px] flex">
            <input
              type="text"
              v-model="keyword"
              @keypress.prevent.enter="handleSearch()"
              class="w-[100%] h-[35px] rounded-l-[4px] text-[14px] text-[#000] border-[#fff]"
              placeholder="Nhập từ khóa tìm kiếm"
            />
            <button
              @click="handleSearch()"
              class="float-right border-[4px] border-[#fff] h-[35px] w-[50px] text-[13px]"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
          <HeaderNotice :notices="[]" />
          <HeaderCart :cart-products="cartProducts" />
        </div>
      </div>
    </div>
  </div>
  <MobileMenu
    :is-show-menu="isShowMenu"
    :user="user"
    @logout="handleLogout"
    @close-menu="toogleMenu"
  />
</template>

<script setup lang="ts">
import HeaderCart from "./parials/cart.vue";
import HeaderNotice from "./parials/notice.vue";
import MobileMenu from "./parials/menu.vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import type { User } from "@/types/user";
import type { ProductCart } from "@/types/users/cart";

const { $axios } = useNuxtApp();
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const cartStore = useCartStore();

const isShowMenu = ref<boolean>(false);
const keyword = ref<string | null>(null);
const user = ref<User | null>(null);
const cartProducts = computed((): ProductCart[] => {
  return cartStore.items;
});

onMounted(() => {
  const queryKeyword = route.query.keyword as string | null;

  if (route.path === "/search" && queryKeyword) {
    keyword.value = queryKeyword;
  }

  user.value = authStore.user;
});

const toogleMenu = (val: boolean) => {
  isShowMenu.value = val;
};
const handleLogout = () => {
  $axios
    .post("/logout")
    .then(() => {
      router.push("/");
    })
    .catch((res) => {
      console.error(res);
    });
};
const handleSearch = () => {
  if (keyword.value != undefined && keyword.value != "") {
    const pagram = {
      keyword: keyword.value,
    };

    router.push({ name: "search", query: pagram });
  }
};
</script>
