import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js' 

import 'common/stylus/reset.css'

Vue.config.productionTip = false

router.afterEach((to,from,next) => {
    window.scrollTo(0,0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
