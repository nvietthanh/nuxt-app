<template>
  <el-drawer
    v-model="showMenu"
    show-close
    direction="ltr"
    size="70%"
    id="mobile-menu"
    @close="handleCloseMenu()"
  >
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">Menu</h4>
    </template>
    <div class="pt-[12px]">
      <template v-for="(menu, index) in menu" :key="index">
        <el-menu v-if="!menu?.isLogin || (menu?.isLogin && user)">
          <el-menu-item
            v-if="!menu.routeList"
            :index="String(index)"
            @click="handleMenu(menu)"
          >
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </el-menu-item>
          <el-sub-menu v-else :index="String(index)">
            <template #title>
              <i :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <el-menu-item
              v-for="(subMenu, childIndex) in menu.routeList"
              :key="index + childIndex"
              :index="String(index + childIndex)"
              @click="handleMenu(subMenu)"
            >
              <span class="ml-[8px]">{{ subMenu.name }}</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </template>
    </div>
  </el-drawer>
</template>
<script setup lang="ts">
import { menu, type MenuItem } from "@/data/menu";
import type { User } from "@/types/user";
import { useRouter } from "vue-router";

const props = defineProps<{ user: User | null; isShowMenu: boolean }>();

const emits = defineEmits(["logout", "closeMenu"]);

const router = useRouter();
const showMenu = ref<boolean>(props.isShowMenu);

watch(
  () => props.isShowMenu,
  (newVal) => {
    showMenu.value = newVal;
  }
);

const handleMenu = (menu: MenuItem) => {
  switch (menu.action) {
    case "redirect":
      if (menu.path) {
        router.push(menu.path);
      }
      break;
    case "logout":
      emits("logout");
      break;
  }
};
const handleCloseMenu = () => {
  emits("closeMenu", false);
};
</script>
