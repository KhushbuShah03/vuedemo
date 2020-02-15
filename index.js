import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import router from './routers.js'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);
Vue.use(Router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
