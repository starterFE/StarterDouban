let fs = require('fs')

// 加载sdk中的gulp任务
fs.readdirSync('node_modules/@xkeshi/koa2-vue2-sdk/gulp').forEach((file) => {
  require('@xkeshi/koa2-vue2-sdk/gulp/' + file)
})
