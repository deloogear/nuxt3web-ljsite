export default {
  // 常用工具集
  _vali: {
    username(t) {
      const regx = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
      return regx.test(t);
    },
    password(t) {
      const regx = /^[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
      return regx.test(t);
    },
    phone(t) {
      const regx = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      return regx.test(t);
    },
    email(t) {
      const regx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      return regx.test(t);
    }
  },
  MV(v) {
    return isNaN(parseInt(v)) ? "0.00" : v.toFixed(2)
  },
}