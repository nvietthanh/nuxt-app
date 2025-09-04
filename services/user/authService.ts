import type { LoginForm } from "@/types/users/form/login-form";

export const loginUser = async (formData: LoginForm) => {
  const { $axios } = useNuxtApp();

  const { data } = await $axios.post("/login", formData);

  return data;
};

export const logoutUser = async () => {
  const { $axios } = useNuxtApp();

  const { data } = await $axios.post("/logout");

  return data;
};