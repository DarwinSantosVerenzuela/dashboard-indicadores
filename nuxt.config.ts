// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-svgo'],
  svgo: {
    autoImportPath: './assets/icons/',
    defaultImport: 'component'
  },
  future: {
    compatibilityVersion: 4,
  }
})
