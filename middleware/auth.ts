import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  const user = authStore.user;

  if (!user) {
    return navigateTo({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }

  const requiredRoles = to.meta.roles as string[] | undefined;

  if (requiredRoles && !requiredRoles.includes(user.role)) {
    return navigateTo("/unauthorized");
  }
});
