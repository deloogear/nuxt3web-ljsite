import request from './api/request.js'
import setting from '@/config';
import api from './api/apis'
const API = {};
const gen = (reqObj) => {
  let method = reqObj.method,
    root = reqObj.root,
    url = setting.API_ROOT[root] ? setting.API_ROOT[root] + reqObj.url : setting.API_ROOT["default"] + reqObj.url;
  return function (params) {
    if (!params) {
      params = {};
    }
    if (method == "POSTFILE") {
      return request.postfile(url, params);
    } else if (method == "POST") {
      return request.post(url, params);
    } else {
      return request.get(url, params);
    }
  }
}

for (const key in api) {

  API[key] = gen(api[key])
  // let root = api[key].root;
  // API['_' + key] = (setting.API_ROOT[root] || setting.API_ROOT["default"]) + api[key].url;
}
API.POST= request.post;
API.GET= request.get;


export default API