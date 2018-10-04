import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const router = new VueRouter({
  routes,
  mode: 'history',
  // https://router.vuejs.org/ja/guide/advanced/scroll-behavior.html
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router