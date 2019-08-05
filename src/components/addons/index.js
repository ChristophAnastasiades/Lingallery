import Vue from 'vue'
export default {
  methods: {
    initAddons() {
      if (this.addons.enableLargeView) {
        const LargeView = require('./LargeView').default
        Vue.component('LargeView', LargeView)
      }
      if (this.addons.enablePictureElement) {
        const PictureElement = require('./PictureElement').default
        Vue.component('PictureElement', PictureElement)
      }
    }
  }
}
