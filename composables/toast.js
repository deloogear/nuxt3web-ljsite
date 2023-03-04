
import {  createApp } from "vue";
import Toast from "./toast/_toast.vue";
var toasCount = 0,
toastList = [];
export const toast = (text,type) => {
    let dom = document.querySelectorAll(".toast-warp");
    if(type==1){
        type="success";
    }
    if(type==2){
        type="error"
    }
    if(type==3){
        type="warning"
    }
    const div = document.createElement("div");
    div.setAttribute("class", `toast-warp`);
    div.setAttribute("style", `z-index:${10000+toasCount+1}`);
    if(dom.length>2){
        document.body.removeChild(dom[0]);
        toastList[0].unmount();
        toastList.shift();
    }
    document.body.appendChild(div)
    const instance = createApp(Toast, {
        text,type
    });
    instance.mount(div);
    toastList.push(instance);
    toasCount++;
}


export default toast;