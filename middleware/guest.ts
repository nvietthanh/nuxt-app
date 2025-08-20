export default defineNuxtRouteMiddleware((to) => {
  const token = getAccessToken();

  if (token) {
    return navigateTo({
      path: "/",
    });
  }
});
