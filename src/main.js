import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import PrepareMessage from './components/PrepareMessage.vue'
import StoredMessage from './components/StoredMessage.vue'
import History from './components/History.vue'
import Home from './components/Home.vue'
import vuetify from './plugins/vuetify';

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
      path: '/history/:guid',
      name: 'History',
      component: History,
      props: true
    },
    {
      path: '/preparemessage/new/:guid',
      name: 'PrepareNewMessage',
      component: PrepareMessage,
      props: true
    },
    {
      path: '/preparemessage/stored/:guid',
      name: 'LoadStoredMessage',
      component: StoredMessage,
      props: true
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

