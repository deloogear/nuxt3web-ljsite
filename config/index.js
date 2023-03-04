const baseurl={
    default:"http://api.com",
    development:"http://dev.api.com",
    production:"http://prod.api.com"
   }
export default {
    REQUEST_TIME_OUT:10*1000,
    API_ROOT: {
        default:baseurl[process.env.NODE_ENV||'default'],
      },
}