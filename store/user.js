import {
    defineStore
} from "pinia";

export default defineStore('user', {
    state() {
        return {
            name: 'user',
            user: {},
            fingerPrint:""
        }
    },
    actions: {
        updateUser(user) {
            this.user = user;
        },
        updatefingerPrint(data){
            
            this.fingerPrint = data;
        }
    },
    getters: {
        loginState(state) {
            return !!state.user ? user.token : ""
        }
    },
    persist: true,
});