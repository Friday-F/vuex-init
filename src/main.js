import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
Vue.config.productionTip = false

let v = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
console.log(v)