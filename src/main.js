import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import History from './components/History.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

