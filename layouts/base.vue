<template>
  <div>
    <Header></Header>
    <slot />
    <Footer></Footer>
    <Login></Login>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Fingerprint2 from "fingerprintjs2";
import useUserStore from "@/store/user"
onMounted(() => {

  const userStore = useUserStore();
  Fingerprint2.get(components => {
    components.push({
      key: 'ip',
      value: '192.168.1.1' //通过接口获取的到ip //TODO  
    });
    userStore.updatefingerPrint(Fingerprint2.x64hash128(components.join(""), 31)); //生成指纹信息

  })

});
</script>
