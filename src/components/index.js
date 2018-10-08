import Vue from 'vue'
import Lingallery from './Lingallery.vue'
import AsyncComputed from 'vue-async-computed'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(AsyncComputed)
Vue.use(Vue2TouchEvents)

Vue.component('Lingallery', 'Lingallery')

export default Lingallery
