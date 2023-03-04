<template>
  <NuxtLayout name="base">
    <div class="h-20 text-center pt-20">页面主体</div>
    
    <Login></Login>
  </NuxtLayout>
</template>

<script setup>
import useAppStore from "@/store/app.js";
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
@media (max-width: 750px) {}
</style>