
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
      { hid: 'description', name: 'description', content: '' },
      {
        'property': 'og:title',
        'content': 'Winkle',
        'template': `Home - Winkle, agence de mentoring pour Célibattante `
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
        'content': 'Winkle, agence de mentoring pour Célibattante, Une aide pour te rebâtir une confiance dans la vie et les relations.'
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
        'content': 'Winkle, agence de mentoring pour Célibattante, Une aide pour te rebâtir une confiance dans la vie et les relations.'
      },
      {
        'name': 'twitter:title',
        'content': 'Home - Winkle, agence de mentoring pour Célibattante'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap'},
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
  ],

  axios: {
    https: true
    // proxyHeaders: false
  }
  // generate: {
  //   routes: function () {
  //     return '/conf'
  //   },
  // }
  /*
  ** Build configuration
  */
}
