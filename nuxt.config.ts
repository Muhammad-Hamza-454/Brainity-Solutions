// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon'
  ],
  css: [
    '~/assets/css/animations.css',
    '~/assets/css/enhanced.css'
  ],
  app: {
    head: {
      title: 'Brainity Solutions - Transforming Ideas into Digital Excellence',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Brainity Solutions - Leading digital transformation company specializing in mobile apps, web development, UI/UX design, enterprise software, and IT consulting services in Lahore, Pakistan.' },
        { name: 'keywords', content: 'web development, mobile app development, UI/UX design, enterprise software, IT consulting, digital transformation, Lahore, Pakistan' },
        { property: 'og:title', content: 'Brainity Solutions - Digital Excellence' },
        { property: 'og:description', content: 'Professional digital solutions and innovative technology services' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
