import Vue from 'vue'
import router from '@/router'
import store from '@/state/store'
import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'

Vue.use(VueFullPage);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
