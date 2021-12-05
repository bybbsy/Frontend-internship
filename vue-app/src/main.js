import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

Vue.config.productionTip = false
Vue.config.silent = true
export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
