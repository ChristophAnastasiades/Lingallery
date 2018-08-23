import Vue from "vue";
import Lingallery from "./Lingallery.vue";
import AsyncComputed from 'vue-async-computed'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(AsyncComputed)
Vue.use(Vue2TouchEvents)

const Components = {
  Lingallery
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
