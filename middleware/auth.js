import {
    defineNuxtRouteMiddleware,
    navigateTo,
  } from "#app";
  
  import useUserStore from "@/store/user";
  
  export default defineNuxtRouteMiddleware((to, form) => {
    const userStore = useUserStore();
    if (userStore.loginState) {
      console.log('已登录')
    } else {
      console.log('未登录')
      return navigateTo({path: `/login`, query: {redirect: to.fullPath}});
    }
  });