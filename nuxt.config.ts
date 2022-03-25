import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'learn-nuxtjs3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
     // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      // { children: ':root { color: red }', type: 'text/css' }
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js' }
    ],
   },

   modules: [
    // Using package name
    '@nuxtjs/pwa',
  ],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },
})
