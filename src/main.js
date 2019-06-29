import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './js/component'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faBars, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretUp, faCaretDown, faBars, faSignOutAlt, faUserCircle)





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
