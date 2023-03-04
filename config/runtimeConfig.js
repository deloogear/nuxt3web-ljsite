//运行时配置项


let baseUrl = {
  default: "http://api.com",
  dev: "http://dev.api.com",
  prod: "http://prod.api.com",
  test: "http://test.api.com",
}

export default {
  public: {
    RUN_MODE: process.env.RUN_MODE,
    apiPath:{
      default:baseUrl[process.env.RUN_MODE||'default'],
    } 
  },
};
 