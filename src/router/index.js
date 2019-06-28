import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/view/Home')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
