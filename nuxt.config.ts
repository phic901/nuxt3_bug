
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  components: true,
  css: ['~/assets/styles/tailwind.css'],
  head: {
    title: 'asdasd',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1 , height=device-height',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'asdasd',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },
  router: {
    middleware: ['loadOnServerLoad', 'heightView'],
  },
  loading: {
    color: '#00A4DC',
    failedColor: '#FF5252',
    height: '8px',
  },
  buildModules: [
    'nuxt-use-motion',
    // '@nuxtjs/firebase',
    '@nuxtjs/date-fns',
    // '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: false }],
    // '@nuxtjs/html-validator'
  ],


  image: {
    imgix: {
      baseURL: 'https://img.test.com',
    },
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 2048,
    },
  },

  modules: [
    '@nuxtjs/auth-next',
    [
      'nuxt-tailvue',
      {
        toast: {
          defaults: {
            containerClasses: [
              'z-[500]',
              'fixed',
              'inset-0',
              'flex',
              'top-0',
              'px-4',
              'py-6',
              'justify-end',
              'pointer-events-none',
              'sm:p-6',
              'sm:items-end',
              'sm:justify-end',
            ],
          },
        },
      },
    ],
    '@nuxtjs/axios',
    ['@nuxtjs/i18n', { vueI18nLoader: true }],
    '@nuxtjs/sentry',
    'nuxt-viewport',
    '@nuxt/image',
    '@nuxtjs/apollo',
    '@nuxtjs/universal-storage',
    '@nuxtjs/pwa',
  ],
  build: {
    transpile: ['vee-validate/dist/rules', 'vue-final-modal', '@vue/apollo-composable', '@nuxtjs/auth'],
  },
  plugins: [
    '~/plugins/filters.ts',
    '~/plugins/truncate.ts',
    '~/plugins/debounce.ts',
    '~/plugins/timeUtils.ts',
    '~/plugins/v-emoji-picker.ts',
    '~/plugins/v-tooltip.ts',
    '~/plugins/axios.ts',
    '~/plugins/vue-tailwind-color-picker.ts',
    { src: '~/plugins/vuesplide.ts', ssr: false },
    { src: '~/plugins/vueform.ts', ssr: false },
    '~/plugins/vue-trend-chart.ts',
    '~/plugins/vee-validate.ts',
    '~/plugins/vueDraggable.ts',
    { src: '~/plugins/filepond.ts', ssr: false },
    '~/plugins/persistedState.client.ts',
    '~/plugins/heightView.ts',
    '~/plugins/vue-final-modal.ts',
    '~/plugins/apollo/apollo-composable.ts',
    '~/plugins/i18n.ts'
  ],
  pwa: {
    icon: {
      source: "/icon.png"
    },
    meta: {
      title: 'asdasda',
      author: 'asdasda developers',
      theme_color: "#059669",

    },
    manifest: {
      name: 'asdasd',
      short_name: 'asd',
      lang: 'en',
    },
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },
  i18n: {
    lazy: true,
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en_US.json',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/home'
    },
    strategies: {
      okuStrategy: {
        scheme: '~/plugins/apollo/graphqlScheme.ts',
        token: {
          required: true,
          property: 'accessToken',
          maxAge: 3500,
          global: true,
        },
        refreshToken: {
          property: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30,
          required: true,
          tokenRequired: true
        },
        user: {
          autoFetch: false
        },
        autoLogout: true
      },
    },
    // @ts-ignore
    token: {
      global: true
    }
  },
  server: {
    host: process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0',
    port: process.env.NODE_ENV === 'production' ? '3000' : '4010',
  },
  axios: {
    baseURL: process.env.GRAPHQL_ENDPOINT
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo/config.ts',
    }
  },

  publicRuntimeConfig: {
    graphQlEndpoint: process.env.GRAPHQL_ENDPOINT || 'http://localhost:3000/graphql',
    stage: process.env.TARGET_STAGE || 'dev',
  },
})
