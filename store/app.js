import {
    defineStore
} from "pinia";

export default defineStore('app', {
    state() {
        return {
            modalLogin: false,
            userAction:"",
      
        }
    },
  actions: {
    loginShow() {
      this.modalLogin = true
    },
    loginHide() {
      this.modalLogin = false
    },
    chengeuserAction(data){
      this.userAction = data
    }
  },
})