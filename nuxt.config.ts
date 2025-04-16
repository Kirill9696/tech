// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // $development: {
  //   devtools: {enabled:false},
  // }, 
  css:['../assets/main.css'],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head:{
      title: "Apple Tech",
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  postcss: {
    plugins: {
      autoprefixer:{}
    }
  },

  modules: [
    'dayjs-nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/ui'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})