require('dotenv').config()
const development = process.env.NODE_ENV !== 'production'

export default {
  srcDir: 'resources/nuxt',
  mode: 'spa',

  head: {
    titleTemplate: '%s - ' + process.env.APP_NAME,
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_DESC || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap'
      }
    ]
  },

  loading: { color: '#fff' },
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/base/',
        prefix: 'Base'
      },
      {
        path: '~/components/sections/',
        prefix: 'Section'
      }
    ]
  },
  css: ['~/assets/app.scss'],
  plugins: [],
  modules: ['nuxt-laravel', '@nuxtjs/axios', '@nuxtjs/auth'],
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt'
  ],

  laravel: { publicDir: 'public_html' },
  bootstrapVue: { icons: true },
  router: { base: '/' },
  axios: { baseURL: development ? process.env.DEV_URL : undefined },
  build: { extend(config, ctx) {} }
}
