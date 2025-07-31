import { useRouter, useRoute } from "#app";
import { useAuthStore } from "@/stores/auth";

export default function useRequireAuth() {
  const authStore = useAuthStore();
  const router = useRouter();
  const route = useRoute();

  function ensureAuth(loginPath: string | null = null): boolean {
    if (!authStore.user) {
      router.push({
        name: "login",
        query: {
          redirect: route.fullPath,
        },
      });

      return false;
    }

    return true;
  }

  const ensureUser = () => ensureAuth()
  const ensureMaker = () => ensureAuth()
  const ensureAdmin = () => ensureAuth()

  return {
    ensureUser,
    ensureMaker,
    ensureAdmin,
  };
}
