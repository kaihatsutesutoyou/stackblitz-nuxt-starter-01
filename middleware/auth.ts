export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from.fullPath);
  console.log('to', to.fullPath);

  if (from.fullPath === '/') {
    return navigateTo('/sample');
  }
  if (from.fullPath === '/sample') {
    return abortNavigation();
  }
  // if (isAdmin() === false) {
  //   return navigateTo('/login')
  // }
});
