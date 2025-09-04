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
          <el-form
            ref="refCustomForm"
            :model="formData"
            :rules="rules"
            label-position="top"
            @keyup.enter.prevent="doSubmit(handleSaveProfile)"
            class="mt-[2rem]"
          >
            <div class="sm:block flex justify-center mb-[24px] cursor-pointer">
              <ImageLoading
                v-if="imageChangeUrl || formData.image_url"
                :src="
                  imageChangeUrl ? imageChangeUrl : formData.image_url ?? ''
                "
                alt="Profile"
                class="w-[150px] h-[150px] border-[1px]"
                @click="handleChangeImage()"
              />
              <div
                v-else
                @click="handleChangeImage()"
                class="w-[150px] h-[150px] border-[1px] border-[#b2b2b2] bg-[#d0011b] text-white flex items-center justify-center text-[42px]"
              >
                {{ formData.last_name[0] }}
              </div>
              <input
                ref="refFileUpload"
                type="file"
                hidden
                @change="handleUploadContent"
                accept=".jpg,.png,.bmp,.jpeg,.tif,.gif"
              />
            </div>
            <div
              class="grid sm:grid-cols-3 grid-cols-2 sm:gap-x-[1.5rem] gap-x-[1rem]"
            >
              <el-form-item
                label="Họ"
                prop="first_name"
                :inline-message="$errors.has('first_name')"
                :error="$errors.first('first_name')"
              >
                <el-input
                  v-model="formData.first_name"
                  size="large"
                  placeholder="Nhập họ"
                />
              </el-form-item>
              <el-form-item
                label="Tên"
                prop="last_name"
                :inline-message="$errors.has('last_name')"
                :error="$errors.first('last_name')"
              >
                <el-input
                  v-model="formData.last_name"
                  size="large"
                  placeholder="Nhập tên"
                />
              </el-form-item>
            </div>
            <div
              class="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-[1.5rem] gap-x-[1rem]"
            >
              <el-form-item
                label="Email"
                prop="email"
                :inline-message="$errors.has('email')"
                :error="$errors.first('email')"
              >
                <el-input
                  v-model="formData.email"
                  size="large"
                  placeholder="Nhập email"
                />
              </el-form-item>
              <el-form-item
                label="Số điện thoại"
                prop="phone_number"
                :inline-message="$errors.has('phone_number')"
                :error="$errors.first('phone_number')"
              >
                <el-input
                  v-model="formData.phone_number"
                  size="large"
                  placeholder="Nhập số điện thoại"
                />
              </el-form-item>
            </div>
            <el-form-item
              label="Địa chỉ"
              prop="address"
              :inline-message="$errors.has('address')"
              :error="$errors.first('address')"
              class="md:w-[400px] w-[100%]"
            >
              <el-input
                v-model="formData.address"
                type="textarea"
                size="large"
                placeholder="Nhập địa chỉ"
              />
            </el-form-item>
            <div class="flex gap-x-[1.5rem]">
              <el-form-item
                label="Giới tính"
                prop="gender"
                :inline-message="$errors.has('gender')"
                :error="$errors.first('gender')"
                class="w-[150px]"
              >
                <el-select
                  v-model="formData.gender"
                  size="large"
                  placeholder="Chọn giới tính"
                >
                  <el-option label="Nam" :value="gender.MALE" />
                  <el-option label="Nữ" :value="gender.FEMALE" />
                </el-select>
              </el-form-item>
              <el-form-item
                label="Ngày sinh"
                prop="birthday"
                :inline-message="$errors.has('birthday')"
                :error="$errors.first('birthday')"
                class="w-[200px]"
              >
                <el-date-picker
                  v-model="formData.birthday"
                  type="date"
                  size="large"
                  format="DD/MM/YYYY"
                  value-format="DD/MM/YYYY"
                  placeholder="Nhập ngày sinh"
                />
              </el-form-item>
            </div>
          </el-form>
          <div class="flex justify-end my-[32px] gap-x-[1rem]">
            <button
              class="mb-[4px] mt-[8px] w-[130px] text-center h-[38px] border-[1px] border-[#b2b2b2]"
              @click="handleBackProfile()"
            >
              Quay lại
            </button>
            <button
              @click="doSubmit(handleSaveProfile)"
              class="mb-[4px] mt-[8px] w-[130px] text-center h-[38px] border-[1px] text-[white] bg-[#d0011b]"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import SlidebarComponent from "@/components/user/profile/slidebar.vue";
import ImageLoading from "@/components/common/image-loading.vue";
import type { Profile } from "@/types/users/profile";
import { useRouter } from "vue-router";
import type { FormRules } from "element-plus";
import { validationMessages } from "@/utils/validation";
import { gender } from "@/const/gender";

definePageMeta({
  name: "account.edit",
  middleware: "auth",
});

const router = useRouter();
const { $axios, $errors } = useNuxtApp();
const { refCustomForm, loadingForm, doSubmit } = useForm();

const refFileUpload = ref();
const formData = ref<Profile>({
  image_url: null,
  email: "thanhtest@gmail.com",
  first_name: "Nguyễn Viết",
  last_name: "Thanh",
  phone_number: "035666111",
  gender: 1,
  birthday: "11/01/2003",
  address: "PN, CM, Hà Nội",
});
const imageFile = ref<File | null>(null);
const imageChangeUrl = ref<string | null>(null);
const rules = reactive<FormRules<Profile>>({
  email: [
    {
      required: true,
      message: validationMessages.required("email"),
      trigger: ["change"],
    },
    {
      type: "email",
      message: validationMessages.type.email("email"),
      trigger: ["change"],
    },
  ],
  first_name: [
    {
      required: true,
      message: validationMessages.required("first name"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.maxLength("first name", 8),
      trigger: ["change"],
    },
  ],
  last_name: [
    {
      required: true,
      message: validationMessages.required("last name"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.maxLength("last name", 8),
      trigger: ["change"],
    },
  ],
  phone_number: [
    {
      required: true,
      message: validationMessages.required("phone number"),
      trigger: ["change"],
    },
    {
      max: 10,
      message: validationMessages.minLength("phone number", 10),
      trigger: ["change"],
    },
    {
      max: 11,
      message: validationMessages.maxLength("phone number", 11),
      trigger: ["change"],
    },
  ],
  gender: [
    {
      required: true,
      message: validationMessages.required("gender"),
      trigger: ["change"],
    },
  ],
  birthday: [
    {
      required: true,
      message: validationMessages.required("birthday"),
      trigger: ["change"],
    },
  ],
  address: [
    {
      required: true,
      message: validationMessages.required("address"),
      trigger: ["change"],
    },
    {
      max: 255,
      message: validationMessages.maxLength("address", 8),
      trigger: ["change"],
    },
  ],
});

const handleChangeImage = () => {
  refFileUpload.value.click();
};
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

    imageFile.value = file;
    imageChangeUrl.value = URL.createObjectURL(file);
  } catch (err) {
    console.error("handleUploadContent", err);
  }
};
const handleBackProfile = () => {
  router.push({ name: "account" });
};
const handleSaveProfile = async () => {
  let newFormData = {
    ...formData.value,
    image_file: imageFile.value
  }

  console.log(newFormData)
};
</script>
