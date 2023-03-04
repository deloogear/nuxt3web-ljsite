<template>
  <Transition name="up">
    <div v-if="appStore.modalLogin" class="bg-black modal mask">
      <div
        class="absolute pt-10 text-sm rounded-lg modal-main px-14 leading-12"
      >
        <span class="close iconfont" @click="appStore.loginHide()"
          >&#xe6dd;</span
        >
        <h6 class="text-center">用户提交</h6>
        <div class="form">
          <div class="input-item">
            <span class="label">姓名</span>
            <div class="input">
              <input type="text" v-model="form.true_name" />
            </div>
          </div>
          <div class="input-item">
            <span class="label required">电话</span>
            <div class="input">
              <input type="text" v-model="form.phone" @input="valPhone" maxlength="20" />
            </div>
          </div>

          <div class="input-item">
            <span class="label">公司名称</span>
            <div class="input">
              <input type="text" v-model="form.company" />
            </div>
          </div>
          <div class="input-item">
            <span class="label">行业类型</span>
            <div class="input">
              <div class="seletor" @click="indusToggle">
                <div class="show">{{ form.industry }}</div>
                <span class="iconfont">&#xe664;</span>
                <div class="list" v-if="showIndus">
                  <div
                    v-for="item in indus"
                    :key="item"
                    class="item"
                    @click="changeIndus(item)"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="submit" @click="submit">
            {{ form.inloading ? "正在提交..." : `提交 →` }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import useAppStore from "@/store/app.js";
import { ref, onMounted,  } from "vue";
const appStore = useAppStore();
const showIndus = ref(false);
const form = ref({});
const changeIndus = (data) => {
  form.value.industry = data;
};
const indus = useState("indusOptions", () =>
  `采矿、能源、餐饮、政府机关、房地产、服务、服装业、公益组织、广告业、其他`.split("、")
);
const indusToggle = () => {
  showIndus.value = !showIndus.value;
};

onMounted(() => {
  api.init().then((res) => {
    if (res.code == 200) {
    }
  });
});
</script>

<style lang="scss" scoped>
.modal {
  background: rgba(#000, 0.5);
  overflow-y: auto;
  .modal-main {
    width: 540px;

    overflow-y: auto;
    background: #fff;
    left: calc(50% - 270px);
    top: 40%;
    transform: translateY(-50%);
    // max-height: calc(100vh - 160px);
    > .close {
      position: absolute;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      top: 16px;
      right: 16px;
      color: #b2bfd3;
      cursor: pointer;
      &:hover {
        color: #999;
      }
    }
    > h6 {
      line-height: 40px;
      font-size: 22px;
      color: $ct1;
      > span {
        color: $ct-hl;
      }
    }
    > p {
      line-height: 40px;
      font-size: 16px;
      color: $ct2;
    }
  }
}
@media (max-width: 750px) {
  .modal {
    .modal-main {
      width: calc(100% - 60px);
      left:30px;
      top:50%;
      border-radius:10px;
      padding:60px 45px;

      .close{
        width:36px;
        height:36px;
        display:block;
        line-height:36px;
        font-size:30px;
        right:25px;
        top:25px;
      }
      >h6{
        line-height:72px;
        font-size:42px;
      }
      >p{
        font-size:26px;
        line-height: 48px;
      }
    }
  }
}
</style>