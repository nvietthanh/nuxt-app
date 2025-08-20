import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  const { $axios } = useNuxtApp();

  const token = getAccessToken();

  if (token) {
    $axios
      .get("get-user")
      .then((res) => {
        const resData = res.data;

        authStore.setUser(resData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        authStore.clearUser();
      });
  }
});
