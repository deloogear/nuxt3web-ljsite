<template>
  <Transition name="up">
    <div class="confirm-mask" @click="onCancel">
      <div class="confirm">
        {{ message }}
        <div class="btns">
          <button class="btn cancel" @click="onCancel">{{ textCancel }}</button>
          <button class="btn" @click="onConfirm">{{ textSubmit }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  message: {
    type: String,
    default: "Confirm?",
  },
  textSubmit: {
    type: String,
    default: "Submit",
  },
  textCancel: {
    type: String,
    default: "Cancel",
  },
  onConfirm: {
    type: Function,
    default: () => { },
  },
  onCancel: {
    type: Function,
    default: () => { },
  },
});
</script>
<style scoped lang="scss" >
.confirm-mask {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(#000, 0.5);
  z-index: 1001;
  top: 0;
  left: 0;

  .confirm {
    width: 240px;
    padding: 20px 0 0 0;
    line-height: 40px;
    font-size: 16px;
    border-radius: 6px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    overflow: hidden;

    .btns {
      margin: 20px auto 0;
      border-top: 1px solid #009aff;
      position: relative;
      display: flex;

      .btn {
        position: relative;
        width: 50%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        cursor: pointer;

        &:hover {
          color: #fff;
          background: #009aff;
        }

        &.cancel {
          color: #ccc;

          &:hover {
            color: #333;
            background: #f2f2f2;
          }
        }
      }
    }
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