export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("custome-dir", {});
  return {
    provide: {},
  };
});
