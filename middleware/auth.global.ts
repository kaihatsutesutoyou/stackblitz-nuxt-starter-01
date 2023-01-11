export default defineNuxtRouteMiddleware((to, from) => {
  console.log('g-from', from.fullPath);
  console.log('g-to', to.fullPath);
});
