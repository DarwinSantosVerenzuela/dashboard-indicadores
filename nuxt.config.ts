// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'app',

  // In Nuxt 4, the 'app/' directory is the default source. 
  // We don't need to specify srcDir if we follow the standard structure.

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  }
})
