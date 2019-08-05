import Vue from 'vue'
export default {
  methods: {
    initAddons() {
      if (this.enableLargeView) {
        const LargeView = require('./LargeView').default
        Vue.component('LargeView', LargeView)
      }
    }
  }
}
