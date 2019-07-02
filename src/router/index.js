import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/view/Home')
const Classify = ()=> import('@/view/Classify')
const Self =  () => import('@/view/self/Self')
const RedPack =  () => import('@/view/RedPack')
const HotOrRecommend =  () => import('@/view/goodsList/HotOrRecommend')
const GoodsDetail =  () => import('@/view/GoodsDetail')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    },
    {
      path: '/redpack',
      name: 'redpack',
      component: RedPack
    },
    {
      path: '/hotOrRecommend',
      name: 'hotOrRecommend',
      component: HotOrRecommend
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail
    }
  ]
})
