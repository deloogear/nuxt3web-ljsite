
import {
    ref,render,
    createVNode
} from "vue";
import Loading from "./_loading.vue"

var loadingTimer = null;
const text = ref("");
const loadingActive = ref(false);

const LoadingInstance = createVNode(Loading, {text:text,active:loadingActive});
const parentNode = document.createElement('div')
document.body.appendChild(parentNode)
render(LoadingInstance, parentNode);
const loading = (t,time)=>{
    text.value=t;
    if(loadingTimer){
        clearTimeout(loadingTimer);
        loadingTimer = null;
    }
    loadingActive.value = true;
    if(time){
        setTimeout(()=>{ loadingActive.value = false},time);
    }
}
const hideloading = ()=>{
    if(loadingTimer){
        clearTimeout(loadingTimer);
        loadingTimer = null;
    }
    // console
    loadingActive.value = false; 
}
export { loading,hideloading}
