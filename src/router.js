import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/users/Users.vue'
import Rights from './components/power/Rights.vue'
import Roles from './components/power/Roles.vue'
import Cate from './components/goods/Cate.vue'
import Params from './components/goods/Params.vue'
import List from './components/goods/List.vue'
import Add from './components/goods/Add.vue'
import Order from './components/order/Order.vue'
import Report from './components/report/Report.vue'
import Index from './components/ui/index.vue'
import Taoci from './components/ui/taoci.vue'
import Gold from './components/ui/gold.vue'
import History from './components/ui/history.vue'
import Liuli from './components/ui/liuli.vue'
import More from './components/ui/more.vue'
import Ranzi from './components/ui/ranzi.vue'
import Suzhi from './components/ui/suzhi.vue'
import Register from './components/ui/register.vue'
import TaociPicOne from './components/ui/taociPicOne.vue'
import TaociPicTwo from './components/ui/taociPicTwo.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/taoci', component: Taoci },
    { path: '/login', component: Login },
    { path: '/gold', component: Gold },
    { path: '/history', component: History },
    { path: '/liuli', component: Liuli },
    { path: '/more', component: More },
    { path: '/ranzi', component: Ranzi },
    { path: '/suzhi', component: Suzhi },
    { path: '/register', component: Register },
    { path: '/taociPicOne', component: TaociPicOne },
    { path: '/taociPicTwo', component: TaociPicTwo },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/goods', component: List },
        { path: '/goods/add', component: Add },
        { path: '/orders', component: Order },
        { path: '/reports', component: Report }
      ]
    }
  ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/index') return next()
  if (to.path === '/login') return next()
  if (to.path === '/taoci') return next()
  if (to.path === '/gold') return next()
  if (to.path === '/history') return next()
  if (to.path === '/liuli') return next()
  if (to.path === '/more') return next()
  if (to.path === '/ranzi') return next()
  if (to.path === '/suzhi') return next()
  if (to.path === '/register') return next()
  if (to.path === '/taociPicOne') return next()
  if (to.path === '/taociPicTwo') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
