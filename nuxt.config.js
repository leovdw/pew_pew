
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
        'template': chunk => `${chunk} - Home`, //or as string template: '%s - My page',
        'vmid': 'og:title'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap'},
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
  ]
  /*
  ** Build configuration
  */
}
