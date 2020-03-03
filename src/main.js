import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 这三个是富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入NProgress包对应的js与css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
/* 设置请求根路径 */
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在request 拦截器中显示进度条 NProgress.start();
/* 挂载到vue的原型对象上 */
/* 这样的话，每个vue组件都可以通过this，来直接访问到￥http，从而发起Ajax请求 */
axios.interceptors.request.use(config => {
  // console.log(config.headers)
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 在response 拦截器里， 隐藏进度条 NProgress.done();
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 把引入的插件设置为全局组件
Vue.component('tree-table', TreeTable)
// 将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor)
// 定义一个全局的过滤器
Vue.filter('dataFormat', function (originVal) {
  const time = new Date(originVal)
  const y = time.getFullYear()
  // padStart 不足字符串长度的用0填充
  const m = (time.getMonth() + 1 + '').padStart(2, '0')
  const d = (time.getDate() + '').padStart(2, '0')
  const hh = (time.getHours() + '').padStart(2, '0')
  const mm = (time.getMinutes() + '').padStart(2, '0')
  const ss = (time.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
