import Vue from 'vue'
import App from './App.vue'
// 调用官方vuex
// import store from './storeModule/index'
// 自己封装的vuex
import store from './store/_index'
import router from './router'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')