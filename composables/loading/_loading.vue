<template>
  <Transition name="fade">
    <div :class="['loading', type]" v-if="active.value">
      <div class="loading-body"> 
        <img src="/img/loading-3.gif" v-if="active.value" alt="" />
        <p v-html="text.value"></p>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "Loading...",
  },
  type: {
    type: String,
    default: "",
  },
});
</script>
<style scoped lang="scss" >
.loading {
  position: fixed;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background: rgba(#000, 0.4);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-body {
    display: block;
    padding: 10px 20px;
    border-radius: 5px;
    background: #fff;
    img {
      display: block;
      margin: 10px auto 0;
    }
    p {
      color: #aaa;
      font-size: 14px;
      line-height: 20px;
      margin:10px auto 0;
    }
  }
}

// 媒体查询
@media (max-width: 1080px) {
  .toast {
    max-width: calc(100vw - 50px);
    border-radius: 8px;
    font-size: 26px;
    padding: 25px 40px;
    text-align: left;
    line-height: 40px;
    box-shadow: 0 0 6px rgba(#000, 0.2);
  }
}

.up-enter-from {
  top: -10px;
  left: 50%;
  transform: translate(-50%, -100%);
}
.up-enter-active {
  transition: all 300ms cubic-bezier(0.09, 0.78, 0.75, 1.36);
}
.up-enter-to {
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}
.up-level-to {
  top: 20px;
  opacity: 0;
}
</style>