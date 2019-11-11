import Vue from 'vue'
import App from './App.vue'

import './assets/css/common.css'
import './assets/css/layout_top.css'
import './assets/css/style.css'

import _ from 'lodash' 

Vue.config.productionTip = false
Vue.prototype._ = _

new Vue({
  render: h => h(App),
}).$mount('#app')
