import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
