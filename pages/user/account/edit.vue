<template>
  <NuxtLayout name="user-layout">
    <template v-slot:main>
      <div class="grid grid-cols-12 gap-4">
        <SlidebarComponent selected="account" />
        <div
          class="sm:col-start-5 lg:col-start-4 col-start-1 col-end-13 bg-[#fff] md:px-[24px] px-[18px] py-[24px]"
        >
          <div class="font-bold pb-[18px] border-b-[1px] border-[#b2b2b2]">
            <a href="route('home')" class="text-[#d0011b]"> Trang chủ </a>
            <i class="bi bi-chevron-right mx-[3px]"></i>
            <a href="test" class="ml-[4px]">Thông tin cá nhân</a>
            <i class="bi bi-chevron-right mx-[3px]"></i>
            <span class="ml-[4px]">Chỉnh sửa</span>
          </div>
          <div class="mt-[2rem]">
            <div class="sm:block flex justify-center mb-[24px] cursor-pointer">
              <img
                v-if="imageSelected || userProfile.image"
                @click="changeImage()"
                :src="'imageSelected ? imageSelected : userProfile.image'"
                alt=""
                class="w-[150px] h-[150px] border-[1px]"
              />
              <div
                v-else
                @click="changeImage()"
                class="w-[150px] h-[150px] border-[1px] border-[#b2b2b2] bg-[#d0011b] text-white flex items-center justify-center text-[42px]"
              >
                {{ userProfile.last_name[0] }}
              </div>
              <input
                v-show="false"
                ref="file"
                type="file"
                @change="handleUploadContent"
                accept=".jpg,.png,.bmp,.jpeg,.tif,.gif"
              />
            </div>
            <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4">
              <div class="mb-[8px]">
                <div class="mb-[4px]">Họ <span class="text-[red]">*</span></div>
                <el-input
                  v-model="userProfile.first_name"
                  size="large"
                  placeholder="Nhập họ"
                />
              </div>
              <div class="mb-[8px]">
                <div class="mb-[4px]">
                  Tên <span class="text-[red]">*</span>
                </div>
                <el-input
                  v-model="userProfile.last_name"
                  size="large"
                  placeholder="Nhập tên"
                />
              </div>
            </div>
            <div class="mb-[8px] md:w-[400px] w-[100%]">
              <div class="mb-[4px]">Địa chỉ</div>
              <el-input
                v-model="userProfile.address"
                type="textarea"
                size="large"
                placeholder="Nhập địa chỉ"
              />
            </div>
            <div class="md:flex block gap-6">
              <div class="mb-[8px] w-[150px]">
                <div class="mb-[4px]">
                  Giới tính <span class="text-[red]">*</span>
                </div>
                <el-select
                  v-model="userProfile.gender"
                  size="large"
                  placeholder="Chọn giới tính"
                >
                  <el-option key="1" label="Nam" value="male" />
                  <el-option key="2" label="Nữ" value="female" />
                </el-select>
              </div>
              <div class="mb-[8px]">
                <div class="mb-[4px]">
                  Ngày sinh <span class="text-[red]">*</span>
                </div>
                <el-date-picker
                  v-model="userProfile.birthday"
                  type="date"
                  size="large"
                  format="DD/MM/YYYY"
                  value-format="DD/MM/YYYY"
                  placeholder="Nhập ngày sinh"
                />
              </div>
            </div>
            <div class="flex justify-end my-[32px] gap-[1rem]">
              <button
                class="mb-[4px] mt-[8px] w-[130px] text-center h-[38px] border-[1px] border-[#b2b2b2]"
                @click="handleBackProfile()"
              >
                Hủy bỏ
              </button>
              <button
                @click="handleSaveProfile()"
                class="mb-[4px] mt-[8px] w-[130px] text-center h-[38px] border-[1px] text-[white] bg-[#d0011b]"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SlidebarComponent from "@/components/user/profile/slidebar.vue";
import type { Profile } from "~/types/users/profile";
import { useRouter } from "vue-router";

definePageMeta({
  name: "account.edit",
});

const router = useRouter();

const userProfile = ref<Profile>({
  email: "thanhtest@gmail.com",
  first_name: "Nguyễn Viết",
  last_name: "Thanh",
  phone_number: "035666111",
  gender: 1,
  birthday: "11/1/1991",
  address: "PN, CM, Hà Nội",
});
const fileImage = ref<File | null>(null);
const imageSelected = ref<string | null>(null);

const handleUploadContent = async (e: Event) => {
  try {
    const target = e.target as HTMLInputElement;
    const files = target.files || (e as DragEvent).dataTransfer?.files;

    if (!files || !files.length) return;

    const file = files[0];

    if (file.size > 5 * 1024 * 1024) {
      ElMessage.warning("File quá lớn, dung lượng tối đa cho phép 5MB");
      return;
    }

    const fileExtension = file.name
      .substring(file.name.lastIndexOf("."))
      .toLowerCase();
    const validFileTypes = [".png", ".bmp", ".jpeg", ".tif", ".gif", ".jpg"];

    if (!validFileTypes.includes(fileExtension)) {
      ElMessage.warning(
        "File sai định dạng. Cần thuộc các định dạng sau: " +
          validFileTypes.join(", ")
      );
      return;
    }

    fileImage.value = file;
    imageSelected.value = URL.createObjectURL(file);
  } catch (err) {
    console.error("handleUploadContent", err);
  }
};
const handleBackProfile = () => {
  router.push({ name: "account" });
};
const handleSaveProfile = () => {};
</script>
