import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import mock from './mock'
import '@/static/js/jquery-1.11.3.js'
import './plugins/iview.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== 'production') require('@/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
