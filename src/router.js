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
import TaociPicThree from './components/ui/taociPicThree.vue'
import TaociPicFour from './components/ui/taociPicFour.vue'
import TaociPicFive from './components/ui/taociPicFive.vue'
import LiuliPicOne from './components/ui/liuliPicOne.vue'
import LiuliPicTwo from './components/ui/liuliPicTwo.vue'
import LiuliPicThree from './components/ui/liuliPicThree.vue'
import LiuliPicFour from './components/ui/liuliPicFour.vue'
import LiuliPicFive from './components/ui/liuliPicFive.vue'
import GoldPicOne from './components/ui/goldPicOne.vue'
import GoldPicTwo from './components/ui/goldPicTwo.vue'
import GoldPicThree from './components/ui/goldPicThree.vue'
import GoldPicFour from './components/ui/goldPicFour.vue'
import GoldPicFive from './components/ui/goldPicFive.vue'
import SuzhiPicOne from './components/ui/suzhiPicOne.vue'
import SuzhiPicTwo from './components/ui/suzhiPicTwo.vue'
import SuzhiPicThree from './components/ui/suzhiPicThree.vue'
import SuzhiPicFour from './components/ui/suzhiPicFour.vue'
import SuzhiPicFive from './components/ui/suzhiPicFive.vue'
import RanziPicOne from './components/ui/ranziPicOne.vue'
import RanziPicTwo from './components/ui/ranziPicTwo.vue'
import RanziPicThree from './components/ui/ranziPicThree.vue'
import RanziPicFour from './components/ui/ranziPicFour.vue'
import RanziPicFive from './components/ui/ranziPicFive.vue'
import MorePicOne from './components/ui/morePicOne.vue'
import MorePicTwo from './components/ui/morePicTwo.vue'
import MorePicThree from './components/ui/morePicThree.vue'
import MorePicFour from './components/ui/morePicFour.vue'

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
    { path: '/taociPicThree', component: TaociPicThree },
    { path: '/taociPicFour', component: TaociPicFour },
    { path: '/taociPicFive', component: TaociPicFive },
    { path: '/liuliPicOne', component: LiuliPicOne },
    { path: '/liuliPicTwo', component: LiuliPicTwo },
    { path: '/liuliPicThree', component: LiuliPicThree },
    { path: '/liuliPicFour', component: LiuliPicFour },
    { path: '/liuliPicFive', component: LiuliPicFive },
    { path: '/goldPicOne', component: GoldPicOne },
    { path: '/goldPicTwo', component: GoldPicTwo },
    { path: '/goldPicFive', component: GoldPicFive },
    { path: '/goldPicThree', component: GoldPicThree },
    { path: '/goldPicFour', component: GoldPicFour },
    { path: '/suzhiPicOne', component: SuzhiPicOne },
    { path: '/suzhiPicTwo', component: SuzhiPicTwo },
    { path: '/suzhiPicThree', component: SuzhiPicThree },
    { path: '/suzhiPicFour', component: SuzhiPicFour },
    { path: '/suzhiPicFive', component: SuzhiPicFive },
    { path: '/ranziPicOne', component: RanziPicOne },
    { path: '/ranziPicTwo', component: RanziPicTwo },
    { path: '/ranziPicThree', component: RanziPicThree },
    { path: '/ranziPicFour', component: RanziPicFour },
    { path: '/ranziPicFive', component: RanziPicFive },
    { path: '/morePicOne', component: MorePicOne },
    { path: '/morePicTwo', component: MorePicTwo },
    { path: '/morePicThree', component: MorePicThree },
    { path: '/morePicFour', component: MorePicFour },
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
  if (to.path === '/taociPicThree') return next()
  if (to.path === '/taociPicFour') return next()
  if (to.path === '/taociPicFive') return next()
  if (to.path === '/liuliPicOne') return next()
  if (to.path === '/liuliPicTwo') return next()
  if (to.path === '/liuliPicThree') return next()
  if (to.path === '/liuliPicFour') return next()
  if (to.path === '/liuliPicFive') return next()
  if (to.path === '/goldPicOne') return next()
  if (to.path === '/goldPicTwo') return next()
  if (to.path === '/goldPicThree') return next()
  if (to.path === '/goldPicFour') return next()
  if (to.path === '/goldPicFive') return next()
  if (to.path === '/suzhiPicOne') return next()
  if (to.path === '/suzhiPicTwo') return next()
  if (to.path === '/suzhiPicThree') return next()
  if (to.path === '/suzhiPicFour') return next()
  if (to.path === '/suzhiPicFive') return next()
  if (to.path === '/ranziPicOne') return next()
  if (to.path === '/ranziPicTwo') return next()
  if (to.path === '/ranziPicThree') return next()
  if (to.path === '/ranziPicFour') return next()
  if (to.path === '/ranziPicFour') return next()
  if (to.path === '/ranziPicFive') return next()
  if (to.path === '/morePicOne') return next()
  if (to.path === '/morePicTwo') return next()
  if (to.path === '/morePicThree') return next()
  if (to.path === '/morePicFour') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
