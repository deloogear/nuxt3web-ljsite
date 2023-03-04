import {createApp} from "vue";
 import Confirm from "./_confirm.vue"
 const confirm =  (message, textSubmit, textCancel)=> {
    return new Promise((resolve, reject) => {
      // 实例化组件，createApp第二个参数是props
      const confirmInstance = createApp(Confirm, 
        {message,
        textSubmit,
        textCancel,
        onConfirm: () => {
          unmount()
          resolve()
        },
        onCancel: () => {
          unmount()
          reject(new Error())
        }
      })
   
      // 创建一个挂载容器
      var parentNode = document.createElement('div')
      document.body.appendChild(parentNode)
      // 挂载组件
      confirmInstance.mount(parentNode);
        // 卸载组件
        const unmount = () => {
        confirmInstance.unmount()
        if(document.body.contains(parentNode)){
          document.body.removeChild(parentNode)
        }
      }
    })
  }
  export default confirm 