import Vue from 'vue'
import VueRouter from 'vue-router'
import log from '@sdk/plugins/log'
import http from '@sdk/plugins/http'
import { addRequestInterceptor, addResponseInterceptor } from '@sdk/http'

Vue.use(VueRouter)
Vue.use(http)
Vue.use(log)

addRequestInterceptor(
  (config) => {
    config.url = '/api' + config.url
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

addResponseInterceptor(
  (response) => {
    // 在这里统一前置处理请求响应
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)