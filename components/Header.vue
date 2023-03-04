<template>
  <div class="absolute w-full  text-center header">
    网页header
  </div>
</template>
<script setup>
import useAppStore from "@/store/app.js";
const appStore = useAppStore();
</script>
<style lang="scss" scoped>
.header {
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 750px) {
  .header {
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>