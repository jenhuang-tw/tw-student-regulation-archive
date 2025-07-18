// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-TW',
        'data-color-mode': ''
      },
      title: '臺灣學生自治規章典藏',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '蒐集台灣各校學生自治組織規章，包含歷史版本。' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/tw-student-regulation-archive/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/tw-student-regulation-archive/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/tw-student-regulation-archive/favicon-16x16.png' },
        { rel: 'manifest', href: '/tw-student-regulation-archive/site.webmanifest' },
        { rel: 'icon', type: 'image/x-icon', href: '/tw-student-regulation-archive/favicon.ico' }
      ]
    },
    // For GitHub Pages deployment, change to your repo name, e.g., '/student-regulations/'
    baseURL: '/tw-student-regulation-archive/'
  },
  //ssr: false,
  nitro: {
    preset: 'static',
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  plugins: [
    '~/plugins/ga4.client.ts', // Google Analytics 4
  ],
  css: [
    '~/assets/css/main.css', // Ensure your main CSS is included
  ],
  runtimeConfig: {
    public: {
      ga4MeasurementId: process.env.NUXT_PUBLIC_GA4_MEASUREMENT_ID || '', // GA4 ID
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})