import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//样式文件一定要引入

// 使用ElementUI
Vue.use(ElementUI);

axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/'   

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')