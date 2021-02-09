export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'My Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-calendar.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa',
  ],

  loading: {
    color: 'dodgerblue',
    height: '2px',
  },

  // FontAwesome module configuration
  fontawesome: {
    icons: {
      component: 'fa',
      solid: [
        'faEdit',
        'faWindowClose'
      ]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000',
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      //'v-calendar'
    ],
    extractCSS: true,
    splitChunks: {
      layouts: true,
      pages: true
    }
  },

  // Auth Configuration
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: false
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false
          },
          tokenRequired: false,
          tokenType: false
        }
      },
      localStorage: true
    },
  },

  // PWA configuration
  pwa: {
    icon: false // Disable the icon module as this is a website.
  },
}
