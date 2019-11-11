import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

/* 用use注册为全局可用的组件 */
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载，前面有解释
Vue.prototype.$message = Message
