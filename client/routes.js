import main from './views/index/index.vue' // 卡券首页

const routes = [
  {
    path: '/',
    name: 'index',
    component: main
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
