import axios from 'axios'
import qs from 'qs'
import setting from '@/config';
import useUserStore from '@/store/app'
const  userStore = useUserStore;

axios.defaults.timeout = setting.REQUEST_TIME_OUT ? setting.REQUEST_TIME_OUT : 10000; //响应时间

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件
    if (config.method === 'post') {

        config.data = config.data ? config.data : {};
        config.data = qs.stringify(config.data);
    }
    if (config.method === "get") {
        // do some thing
    }

    // let token = cookie.get(setting.PROP_NAMES.token);
    // // console.log(setting.PROP_NAMES.token,token);
    // if (token) {  
    //     config.headers.token = token;
    // }
    // let channel = cookie.get(setting.PROP_NAMES.channel);
    // if (channel) {  
    //     config.headers.channel = channel;
    // }
    // if(userStore.fingerPrint){  //浏览器指纹
    //     config.headers.fingerPrint = fingerPrint;
    // }
    // if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {  //访问设备区分
    //     config.headers.plat = 'wap'
    // } else {
    //     config.headers.plat = 'pc'
    // }
    return config;
}, (error) => {
    console.log('错误的传参')
    return Promise.reject(error);
});
// // 判断结果
axios.interceptors.response.use(response => {
    let data = response.data;
    // console.log("res",data)
    switch (data.code) {
        case '600': {
            Toast(data.msg);
            // store.dispatch('Logout')
            // store.dispatch('CallLogin');
            // const router = useRouter();
            // router.push("/login");
        }
    }
    return Promise.resolve(data)
}, error => {
    console.log("response-error:", error)
    if (error && error.response && error.response.status) {
        switch (error.response.status) {
            case 500:
                // do something...
                break
            case 404:
                // do something...
                break
            default:
                // do something...
                break
        }
    }
})


//返回一个Promise(发送post请求)

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                console.log('reject-error:', error);
                reject(error)
            })
    })
}
export function postfile(url, params) {
    return new Promise((resolve, reject) => {
        var param = new FormData();
        param.append("file", params.file);

        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        console.log(param, params.file);
        axios.post(url, param, config)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                console.log('reject-error:', error);
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                console.log('reject-error:', error);
                reject(error)
            })
    })
}


export default {
    post,
    get,
    postfile
}