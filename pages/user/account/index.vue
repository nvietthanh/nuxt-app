<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="grid grid-cols-12 gap-4">
        <SlidebarComponent selected="account" />
        <div
          class="sm:col-start-5 lg:col-start-4 col-start-1 col-end-13 bg-[#fff]"
        >
          <div class="md:px-[24px] px-[18px] py-[24px]">
            <div class="font-bold pb-[18px] border-b-[1px] border-[#b2b2b2]">
              <a href="route('home')" class="text-[#d0011b]"> Trang chủ </a>
              <i class="bi bi-chevron-right mx-[3px]"></i>
              <span class="ml-[4px]">Thông tin cá nhân</span>
            </div>
            <div class="mt-[2rem]">
              <div class="sm:block flex justify-center mb-[24px]">
                <ImageLoading
                  :src="userProfile.image_url"
                  :is-lazy="false"
                  alt="Profile"
                  class="w-[150px] aspect-square border-[1px]"
                />
              </div>
              <div class="flex mb-[18px]">
                <div
                  class="sm:w-[150px] w-[auto] sm:mr-[0px] mr-[14px] font-bold"
                >
                  Họ tên:
                </div>
                <div>
                  {{ userProfile.first_name }} {{ userProfile.last_name }}
                </div>
              </div>
              <div class="flex mb-[18px]">
                <div
                  class="sm:w-[150px] w-[auto] sm:mr-[0px] mr-[14px] font-bold"
                >
                  Email đăng nhập:
                </div>
                <span>{{ userProfile.email }}</span>
              </div>
              <div class="flex mb-[18px]">
                <div
                  class="sm:w-[150px] w-[auto] sm:mr-[0px] mr-[14px] font-bold"
                >
                  Số điện thoại:
                </div>
                <span>{{ userProfile.phone_number }}</span>
              </div>
              <div class="flex mb-[18px]">
                <div
                  class="sm:w-[150px] w-[auto] sm:mr-[0px] mr-[14px] font-bold"
                >
                  Giới tính:
                </div>
                <span>{{ userProfile.gender == 1 ? "Nam" : "Nữ" }}</span>
              </div>
              <div class="flex mb-[18px]">
                <div
                  class="sm:w-[150px] w-[auto] sm:mr-[0px] mr-[14px] font-bold"
                >
                  Ngày sinh:
                </div>
                <span>{{ userProfile.birthday }}</span>
              </div>
              <div class="flex mb-[18px]">
                <div
                  class="sm:min-w-[150px] w-[100px] sm:mr-[0px] mr-[14px] font-bold"
                >
                  Địa chỉ:
                </div>
                <span>
                  Thôn Đồng Trữ, Xã Phú Nghĩa, Huyện Chương Mỹ, Hà Nội
                </span>
              </div>
              <div class="flex justify-end my-[32px]">
                <button
                  class="mb-[4px] mt-[8px] ml-[24px] w-[130px] text-center h-[38px] border-[1px] text-[white] bg-[#d0011b]"
                  @click="handleEditProfile()"
                >
                  Chỉnh sửa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SlidebarComponent from "@/components/user/profile/slidebar.vue";
import ImageLoading from "~/components/common/image-loading.vue";
import type { Profile } from "@/types/users/profile";
import { useRouter } from "vue-router";

definePageMeta({
  name: "account",
});

const router = useRouter();

const userProfile = ref<Profile>({
  image_url: null,
  email: "thanhtest@gmail.com",
  first_name: "Nguyễn Viết",
  last_name: "Thanh",
  phone_number: "035666111",
  gender: 1,
  birthday: "11/1/1991",
  address: "PN, CM, Hà Nội",
});

const handleEditProfile = () => {
  router.push({ name: "account.edit" });
};
</script>
