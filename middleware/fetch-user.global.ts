import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async () => {
    const authStore = useAuthStore();
    const { $axios } = useNuxtApp();

    $axios
        .post("get-user")
        .then((res) => {
            authStore.setUser(res.data);
        })
        .catch((error) => {
            console.error("Error:", error);
            authStore.clearUser();
        });
});
