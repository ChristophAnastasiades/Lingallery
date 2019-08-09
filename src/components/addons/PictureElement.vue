<template>
  <picture>
    <source
      v-for="(item, index) in items[currentIndex].pictureElement"
      :key="index"
      :srcset="item.srcset"
      :media="item.media ? item.media : false"
      :type="item.type ? item.type : false"
    />
    <img
      :src="items[currentIndex].src"
      :alt="items[currentIndex].alt"
      :style="mainImageStyle"
      :class="{ loading: isLoading }"
      @click="handleLargeImageClick"
      @load="handleImageLoaded"
      v-swipe="handleImageSwipe"
    />
  </picture>
</template>

<script>
import Hammer from 'hammerjs'

export default {
  name: 'PictureElement',
  directives: {
    swipe: {
      bind: function(el, binding) {
        if (typeof binding.value === 'function') {
          const hammerjs = new Hammer(el)
          hammerjs.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL })
          hammerjs.on('swipe', binding.value)
        }
      }
    }
  },
  props: {
    alt: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    mainImageStyle: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleLargeImageClick() {
      this.$emit('handle-large-image-click')
    },
    handleImageSwipe(event) {
      this.$emit('handle-image-swipe', event)
    },
    handleImageLoaded() {
      this.$emit('handle-image-loaded')
    }
  }
}
</script>

<style lang="scss" scoped></style>
