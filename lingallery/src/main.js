// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Lingallery from './Lingallery.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Lingallery :width="534" :items="' +
      '[{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/property/5655/99695_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/property/5655/99695_detail.jpg\', caption: \'Schönes Haus\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/property/5655/99696_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/property/5655/99696_detail.jpg\', caption: \'Lustiges Haus\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/property/5655/99697_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/property/5655/99697_detail.jpg\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99708_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99708_detail.jpg\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99709_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99709_detail.jpg\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99710_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99710_detail.jpg\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99711_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99711_detail.jpg\'},' +
      '{src: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99712_detail.jpg\', thumbnail: \'https://s3.eu-central-1.amazonaws.com/metatravel/pictures/accommodation/12449/99712_detail.jpg\'},]"/>',
  components: { Lingallery }
})
