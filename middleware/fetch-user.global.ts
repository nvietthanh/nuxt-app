import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  const { $axios } = useNuxtApp();
  const token = useCookie("token");

  if (token.value) {
    $axios
      .post("get-user")
      .then((res) => {
        authStore.setUser(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        authStore.clearUser();
      });
  }
});
