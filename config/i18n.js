import cn from "@/language/cn.js"
import en from "@/language/en.js"

export default {
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
   defaultLocale: 'cn',   // default locale of your project for Nuxt pages and routings
    vueI18n: {
      legacy: false,
      locale: 'cn',
      messages: {
        en,
        cn
      }
    }
  }