import 'babel-polyfill'
import 'normalize.css'
import Vue from 'vue'

import './config'
import App from './app.vue'
import router from './router'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

