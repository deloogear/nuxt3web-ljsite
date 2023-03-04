import login from './account'
import common from "./common"


let commonApis ={};
let spApis={};

const assign = (api)=>{
  Object.assign(commonApis,api.commonApis||{});
  Object.assign(spApis,api.spApis||{});
}
assign(login)
assign(common)


for(var i in commonApis){
    spApis[i]={
      url: commonApis[i],
      method: 'POST',
      root: '',
    }
  }


export default spApis