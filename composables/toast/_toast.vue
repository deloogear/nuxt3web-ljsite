<template>
  <Transition name="up">
    <div :class="['toast', type, hasClose ? 'hasclose' : '']" v-show="visible">
      {{ text }}
      <span v-if="hasClose" class="close" @click="close">close</span>
    </div>
  </Transition>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "msg",
  },
  duration: {
    type: Number,
    default: 2400,
  },
  hasClose: {
    type: Boolean,
    default: false,
  },
});
const visible = ref(false);
const emit = defineEmits(["close"]);
onMounted(() => {
  visible.value = true;
  if (props.duration) {
    setTimeout(()=>{
        visible.value = false;
         emit("close")
    },2000)
  }
});
const close = () => {
  visible.value = false;
  emit("close");
};
</script>
<style scoped lang="scss" >
.toast {
  position: fixed;
  z-index: 10000;
  padding: 15px 20px;
  border-radius: 4px;
  min-width: 150px;
  line-height: 24px;
  font-size: 16px;
  color: #fff;
  background: rgba(#000, 0.7);
  box-shadow: 0 -2px 6px rgba(#000, 0.2);
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  &.success {
    background: rgba(#00bc70, 0.9);
  }
  &.error {
    background: rgba(#ff5050, 0.9);
  }
  &.warning {
    background: rgba(#fda723, 0.9);
  }
}

// 媒体查询
@media (max-width: 1080px) {
  .toast{
    max-width:calc(100vw - 50px);
    border-radius: 8px;
    font-size:26px;
    padding:25px 40px;
    text-align: left;
    line-height:40px;
    box-shadow:0 0 6px rgba(#000,0.2);
  }
}

.up-enter-from {
  top: -10px;
  left: 50%;
  transform: translate(-50%, -100%);
}
.up-enter-active {
  transition: all 300ms cubic-bezier(.09,.78,.75,1.36);
}
.up-enter-to {
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}
.up-level-to{
  top:20px;
  opacity:0;
}
</style>