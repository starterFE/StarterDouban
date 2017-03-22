/**
 * 应用主模块
 */

const createApp = require('@sdk/server')
const { IS_WEBPACK_MIDDLEWARE } = require('@sdk/server/utils/env')

createApp({
  // 传入路由
  routes: require('./routes/index'),
}, () => {
  if (IS_WEBPACK_MIDDLEWARE) {
    let port = require('../app.config').appPort
    require('open')(`http://${require('ip').address()}:${port}`)
  }
})