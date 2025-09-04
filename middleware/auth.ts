export default defineNuxtRouteMiddleware((to) => {
  const token = getAccessToken();

  if (!token) {
    return navigateTo({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }
});
