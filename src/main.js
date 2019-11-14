import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/element.js'
/* 以上是项目自建的 */
/* 导入全局样式 */
import './assets/css/global.css'
import axios from 'axios'
import './assets/fonts/iconfont.css'
/* 设置请求根路径 */
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
/* 挂载到vue的原型对象上 */
/* 这样的话，每个vue组件都可以通过this，来直接访问到￥http，从而发起Ajax请求 */
axios.interceptors.request.use(config => {
  // console.log(config.headers)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
