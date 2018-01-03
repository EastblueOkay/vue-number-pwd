import Vue from 'vue'
import App from './App.vue'

import vnp from "vue-number-pwd"
Vue.use(vnp)

new Vue({
  el: '#app',
  render: h => h(App)
})
