/**
 * 本文件仅用于本地开发环境，用于存放一些常量
 */
module.exports = {
  // 代理配置
  proxyTargets: {
    // 开发环境
    'dev': 'http://xxx.dev.xkeshi.so:8082',
    // 测试环境
    'test': 'http://xxx.test.xkeshi.so:8082',
    // 预发布环境
    // 'pre': 'http://xxx.prepub.xkeshi.so:8082',
    // 正式环境
    // 'product': 'http://xxx.xkeshi.net',
    // 某某某的本地环境
    // 'xxx': 'http://192.168.141.253:8080',
  }
}