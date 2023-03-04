
import { VitePluginCopy } from 'vite-plugin-copy2'
import {
  resolve
} from 'pathe';
import cn from "./language/cn"
import en from "./language/en"
import runtimeConfig from './config/runtimeConfig';


export default {
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig,
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: [{
      code:'cn',
      iso:'zh-cn'
    },  {
      code: 'en',
      iso: 'en-US'
    }], // used in URL path prefix
   defaultLocale: 'en',   // default locale of your project for Nuxt pages and routings
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en,
        cn
      }
    }
  },
  // imports: {
  //   dirs: [
  //     'composables/*/index.{ts,js,mjs,mts}',
  //   ]
  // },

  // css: ["~/assets/style/tailwind.css"],
  build: {
    postcss: {
      postcssOptions:require('./config/postcss.mjs'),
    },
  },
  app: {
    buildAssetsDir: "/src/",
    cdnURL: "",
    baseURL: process.env.BASE_URL || "/", 
    head: {
      meta: [{
          name: 'viewport',
          content: 'width=750,user-scalable=no'
        },
        {
          name: 'keyword',
          content: '网站关键词'
        },
        {
          name: 'description',
          content: '网站描述'
        }
      ],
      title:"title",
      script: [
        // 插入js
        // {
        //   src: '/js/append.js',
         
        // },
   
        // {
        //   src:"js/flexible.js",  //用于px2rem初始化 rem
        //   ssr:false
        // }
      ],
      link: [
        // 插入 引用资源
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      style: [
        //全局样式
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [{
        children: 'Javascript is required'
      }]
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  alias: {
    // 别名
    '@img': resolve(__dirname, './assets/images'),
    '@style': resolve(__dirname, './assets/style'),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 全局插入scss
          additionalData: '@import "assets/style/variable.scss";'
        }
      }
    },
    define:{},
    plugins: [
      VitePluginCopy([
        // 文件复制, 用于生成以后转移
          // { src: './.output/public', dest: './../' },
      ]),
  ],
    // build:{
    //   outDir:".out"
    // }
  },
  tailwindcss: {
    // cssPath: false, 
    configPath: './config/tailwind.mjs',
    viewer: false  //是否开启 _tailwind 样式预览页面
  }
} 