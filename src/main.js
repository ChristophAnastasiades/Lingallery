import Vue from 'vue'
import App from './App.vue'
import './components'
import AsyncComputed from 'vue-async-computed'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(AsyncComputed)
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
