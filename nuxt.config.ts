// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  // typescript: {
  //   typeCheck: true,
  // },
  css: ['~/assets/main.scss', '~/assets/css/main.css'],
  alias: {
    '@': '/<srcDir>',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;',
        },
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/image', '@vueuse/nuxt', '@nuxtjs/i18n', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['~/store/**'],
  },
  i18n: {
    vueI18n: './i18n.config.ts',

    locales: [{ code: 'en', language: 'en-US' }],
    defaultLocale: 'en',
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL,
    },
  },

  compatibilityDate: '2025-01-26',
});
