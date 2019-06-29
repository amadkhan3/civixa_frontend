import Vue from 'vue'

import Multiselect from 'vue-multiselect'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faBars, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretUp, faCaretDown, faBars, faSignOutAlt, faUserCircle)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('multiselect', Multiselect.default)
Vue.component('apexchart', VueApexCharts)

Vue.use(VueApexCharts)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)