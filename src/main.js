import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock/mock.js'
import request from './http/request.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Layui from 'layui'
import 'layui/src/css/layui.css'

Vue.use(ElementUI);
Vue.use(Layui);
Vue.prototype.request = request;
Vue.prototype.mock = mock;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')