/**
 * app入口,使整个应用基于es6开发
 */
const path = require('path')
require('babel-core/register')({
  // 由于可复用代码已经抽取至sdk,babel默认不编译node_modules下的模块,所以需要将sdk列入白名单
  only: [path.join(__dirname, '*'), /@xkeshi/]
})
require('babel-polyfill')
// 设置模块别名
require('module-alias').addAliases({
  '@sdk': '@xkeshi/koa2-vue2-sdk',
  '@sdklog': '@xkeshi/koa2-vue2-sdk/server/utils/log',
})
require('./app')