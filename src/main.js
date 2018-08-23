import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(AsyncComputed)
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
