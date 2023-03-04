module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // px2rem 配置
    // "postcss-pxtorem": {
    //   rootValue: 75, 
    //   exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
    //   propList: [
    //     "*",
    //   ]
    // }
  },
}

