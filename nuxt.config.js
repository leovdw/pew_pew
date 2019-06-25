require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Winkle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site Winkle' },
      {
        'property': 'og:title',
        'content': 'Winkle',
        'template': `Winkle - Agence d'accompagnement pour célibattantes`
      },
      {
        'property': 'og:locale',
        'content': 'fr_FR'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:description',
        'content': `Winkle, c'est la première agence qui met les célibattantes au coeur de leurs actions. Accompagnement, activités, entraide, et surtout bienveillance`
      },
      {
        'property': 'og:url',
        'content': 'https://winkle.fr/'
      },
      {
        'property': 'og:site_name',
        'content': 'Winkle'
      },
      {
        'name': 'twitter:card',
        'content': 'summary_large_image'
      },
      {
        'name': 'twitter:description',
        'content': `Winkle, c'est la première agence qui met les célibattantes au coeur de leurs actions. Accompagnement, activités, entraide, et surtout bienveillance`
      },
      {
        'name': 'twitter:title',
        'content': `Winkle - Agence d'accompagnement pour célibattantes`
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Playfair+Display|Ubuntu&display=swap'},
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        type: "image/png",
        sizes: "180x180",
        color: "#5bbad5",
        href: "/safari-pinned-tab.svg"
      },
      {
        name: "msapplication-TileColor",
        content: "#da532c",
      },

      // <meta name="theme-color" content="#ffffff">
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/scroll',
  ],
  /*
  ** Nuxt.js modules
  */
  build: {
    extractCSS: false,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
      'postcss-responsive-type': {},
      'postcss-nested': {}
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    'nuxt-babel',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  axios: {
    https: true
    // proxyHeaders: false
  },
  env: {
    baseURL: process.env.MAILCHIMP_API_CODE
  },

  // generate: {
  //   routes: function () {
  //     return '/conf'
  //   },
  // }
  /*
  ** Build configuration
  */
}
