// plugins/axios.ts
import axios, { type AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { useErrorsStore } from "@/stores/errors";

const baseApiURL = import.meta.env.VITE_BASE_API_URL.replace(/\/$/, "");

export const defaultConfig: AxiosRequestConfig = {
  baseURL: baseApiURL,
  timeout: 60000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  withCredentials: false,
  responseType: "json",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
};

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create(defaultConfig);

  instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      if (error instanceof Error) {
        return Promise.reject(error);
      }

      return Promise.reject(new Error(JSON.stringify(error)));
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response?.status;
      // const errorCode = error.response?.data?.error?.code

      // Handle unauthorized (401)
      if (status === 401) {
        const url = window.location.pathname;
        const guestRoutes = ["/login", "/register"];

        if (!guestRoutes.includes(url)) {
          // const refresh_token = localStorage.getItem('refresh_token')
          // if (refresh_token) {
          // Gọi store để refresh lại token
          // Ví dụ nếu bạn dùng pinia:
          // const authStore = useAuthStore()
          // await authStore.refreshToken(refresh_token)
          // } else {
          // Logout
          // const authStore = useAuthStore()
          // authStore.logout()
          // }
        }

        return Promise.reject(
          new Error("Request failed", { cause: error.response })
        );
      }

      // Validation error
      if (status === 422 || status === 302) {
        const errorStore = useErrorsStore();
        errorStore.set(error.response.data?.errors);
      }

      return Promise.reject(
        error instanceof Error ? error : new Error("Unknown Axios error")
      );
    }
  );

  // Gắn vào Nuxt context
  return {
    provide: {
      axios: instance,
    },
  };
});
