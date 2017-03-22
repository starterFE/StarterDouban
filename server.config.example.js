/**
 * 配置服务端口，以及代理
 * 此文件在部署服务器上会被配置中心的配置文件覆盖！！！
 */
const constants = require('./dev-constants')

module.exports = {
  appPort: 9001,
  proxy: {
    '/api': constants.proxyTargets.dev,
  }
}