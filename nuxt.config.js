export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - hacker-news',
    title: 'hacker-news',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            name: 'English',
            code: 'en',
            file: 'en.json',
          },
          {
            name: 'Español',
            code: 'es',
            file: 'es.json',
          },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales/',
        vueI18n: {
          dateTimeFormats: {
            en: {
              short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              },
              long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
              },
            },
            es: {
              short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              },
              long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
              },
            },
          },
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ['~/api/index.js'],

  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api/stories',
  },
};
