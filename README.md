
# nuxt3-ljsite
----
纯javascript, nuxt3web网站框架, 没使用ts , 比较简单, 
毕竟小公司,自己常用的功能放了一些, 基本都验证通过


> * tailwindcss   [原子化css]
> * pinia  [仓储]
> * i18n   [多语言]
> * vueuse [vue工具集]
> * image  [全局图片懒加载组件]
> * Pinia-Plugin-Persistedstate [仓储本地持久化]


```javascript
yarn  
yarn dev
```

个人能力问题, 难免有些地方不是很规范

ps: 
未解决问题:多环境开发
目前是用的 process.env.NODE_ENV, 进行环境区分
我想要run时候一次性修改congig.js的参数, 总会出现各种错误, 
不论通过 运行参数, dotenv, vite的loadenv, 都未能成功, 总是在开发环境/发布环境, server和client端总会出现各种问题,
用vite的define设置时候,到是能使用, 但是控制台依然会有报错,
官方推荐用 runtimeConfig ,  但是runtimeconfig需要在nuxt编译执行完毕才能使用,我是在引入config文件时候, 就把配置项修改好, 使用runtimeConfig 会报错,



