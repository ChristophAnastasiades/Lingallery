<template>
  <div :style="lingalleryStyle" class="lingallery">
    <large-view
      id="largeView"
      :class="{ show: showLargeView }"
      :current-image="currentImage"
      v-if="enableLargeView"
      @close-large-view="showLargeView = false"
    />
    <figure
      :style="figureStyle"
      itemprop="associatedMedia"
      itemscope
      itemtype="http://schema.org/ImageObject"
    >
      <div class="lingallery_spinner">
        <half-circle-spinner
          :animation-duration="1000"
          :color="accentColor"
          :size="60"
          v-if="isLoading"
        />
      </div>
      <img
        :alt="currentAlt"
        :class="{ loading: isLoading }"
        :src="currentImage"
        :style="mainImageStyle"
        @click="handleLargeImageClick"
        ref="mainImage"
        v-swipe="handleImageSwipe"
      />
      <div
        :style="captionStyle"
        class="lingallery_caption"
        v-if="currentCaption"
      >
        {{ currentCaption }}
      </div>
      <a
        @click="showPreviousImage"
        class="control left"
        v-if="!leftControlClass"
        ><span style="position:relative;top:calc(50% - 12px)">&#9664;</span></a
      >
      <a @click="showNextImage" class="control right" v-if="!rightControlClass"
        ><span style="position:relative;top:calc(50% - 12px)">&#9654;</span></a
      >
      <a
        :class="'control left ' + leftControlClass"
        @click="showPreviousImage"
        v-if="leftControlClass"
      ></a>
      <a
        :class="'control right ' + rightControlClass"
        @click="showNextImage"
        v-if="rightControlClass"
      ></a>
    </figure>
    <div class="lingallery_thumbnails" v-if="showThumbnails">
      <div class="lingallery_thumbnails_content">
        <div
          :key="index"
          class="lingallery_thumbnails_content_elem"
          v-for="(item, index) in items"
        >
          <img
            :alt="item.hasOwnProperty('alt') ? item.alt : ''"
            :src="item.thumbnail"
            :style="thumbnailStyle(index)"
            height="64"
            v-on="
              currentIndex !== index
                ? { click: () => handleImageClick(index) }
                : {}
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { HalfCircleSpinner } from 'epic-spinners'
import Hammer from 'hammerjs'
import AsyncComputed from 'vue-async-computed'
import Addons from './addons/index.js'

Vue.use(AsyncComputed)

export default {
  name: 'Lingallery',
  mixins: [Addons],
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
  data() {
    return {
      currentImage: null,
      currentIndex: 0,
      currentId: null,
      currentCaption: '',
      currentAlt: '',
      windowWidth: 0,
      isLoading: true,
      showLargeView: false
    }
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    startImage: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 400
    },
    baseColor: {
      type: String,
      default: '#fff'
    },
    accentColor: {
      type: String,
      default: '#3498db'
    },
    textColor: {
      type: String,
      default: '#000'
    },
    responsive: {
      type: Boolean,
      default: false
    },
    showThumbnails: {
      type: Boolean,
      default: true
    },
    mobileHeight: {
      type: Number,
      default: 0
    },
    mobileHeightBreakpoint: {
      type: Number,
      default: 0
    },
    leftControlClass: {
      type: String,
      default: ''
    },
    rightControlClass: {
      type: String,
      default: ''
    },
    disableImageClick: {
      type: Boolean,
      default: false
    },
    enableLargeView: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HalfCircleSpinner
  },
  computed: {
    lingalleryStyle() {
      return this.windowWidth > this.width && !this.responsive
        ? 'width:' + this.width + 'px'
        : 'width:100%'
    },
    captionStyle() {
      return 'color:' + this.textColor
    },
    mainImageStyle() {
      let mainImageStyle = ''

      if (
        this.mobileHeight !== 0 &&
        this.windowWidth < this.mobileHeightBreakpoint
      ) {
        mainImageStyle +=
          'width:100%;height:' + this.mobileHeight + 'px;object-fit:cover;'
      }
      if (
        this.$refs.mainImage &&
        this.$refs.mainImage.classList.contains('loading')
      ) {
        if (this.mobileHeight !== 0) {
          mainImageStyle += 'min-height:' + this.mobileHeight + 'px;'
        } else mainImageStyle += 'min-height:200px;'
      }

      return mainImageStyle
    }
  },
  asyncComputed: {
    figureStyle() {
      if (this.currentImage) {
        return this.getImageSize(this.currentImage)
          .then(result => {
            let heightValue = 'height:auto'

            // Hide Loader
            this.handleLoader(false)

            if (
              result.widthValue < result.heightValue &&
              this.mobileHeight === 0
            ) {
              heightValue = 'height:' + this.height + 'px'
            }
            return this.windowWidth > this.width && !this.responsive
              ? 'width:' + this.width + 'px;height:' + this.height + 'px'
              : 'width:100%;' + heightValue
          })
          .catch()
      } else
        return this.windowWidth > this.width && !this.responsive
          ? 'width:' + this.width + 'px;height:' + this.height + 'px'
          : 'width:100%;height:auto'
    }
  },
  methods: {
    initLingallery() {
      this.currentImage = this.items[this.startImage].src
      this.currentCaption = this.items[this.startImage].caption
      this.currentId = this.items[this.startImage].id
      this.currentIndex = this.startImage
      this.windowWidth = window.innerWidth
      this.sendId()
    },
    handleImageSwipe(event) {
      if (event.direction === 2) {
        this.showPreviousImage()
      } else if (event.direction === 4) {
        this.showNextImage()
      }
    },
    handleImageClick(index) {
      this.currentIndex = index
      this.pickImage(index)
    },
    handleLargeImageClick() {
      if (this.enableLargeView) {
        this.showLargeView = true
      } else if (!this.disableImageClick) {
        this.showNextImage()
      }
    },
    async getImageSize(src) {
      let image = await this.getImage(src)
      return {
        widthValue: image.naturalWidth,
        heightValue: image.naturalHeight
      }
    },
    async getImage(src) {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      }).catch()
    },
    handleLoader(isLoading) {
      this.isLoading = isLoading
    },
    pickImage(index) {
      // Show Loader
      this.handleLoader(true)

      this.currentImage = this.items[index].src
      this.currentCaption = this.items[index].hasOwnProperty('caption')
        ? this.items[index].caption
        : ''
      this.currentAlt = this.items[index].hasOwnProperty('alt')
        ? this.items[index].alt
        : ''
      this.currentId = this.items[index].hasOwnProperty('id')
        ? this.items[index].id
        : ''

      this.sendId()
    },
    thumbnailStyle(index) {
      let color =
        this.currentIndex === index ? this.accentColor : this.baseColor
      return 'border-color:' + color
    },
    sendId() {
      this.$emit('update:iid', this.currentId)
    },
    showNextImage() {
      // Show Loader
      this.handleLoader(true)

      if (this.items.length > this.currentIndex + 1) {
        this.currentIndex = this.currentIndex + 1
      } else {
        this.currentIndex = 0
      }

      this.pickImage(this.currentIndex)
    },
    showPreviousImage() {
      // Show Loader
      this.handleLoader(true)

      if (this.currentIndex !== 0) {
        this.currentIndex = this.currentIndex - 1
      } else {
        this.currentIndex = this.items.length - 1
      }

      this.pickImage(this.currentIndex)
    }
  },
  created() {
    this.initAddons()
  },
  mounted() {
    this.initLingallery()
  },
  watch: {
    items() {
      this.currentImage = this.items[this.startImage].src
    }
  }
}
</script>

<style lang="scss" scoped>
.lingallery {
  max-width: 100%;
  figure {
    position: relative;
    margin: 0;
    padding: 0;
    max-width: 100%;
    text-align: center;
    cursor: pointer;
    img {
      max-width: 100%;
      max-height: 100%;
      transition: opacity 0.25s ease;
      &.loading {
        opacity: 0.25;
        min-height: 200px;
        transition: opcacity 0.25s ease;
      }
    }
    a.control {
      position: absolute;
      top: 0;
      padding-left: 5px;
      padding-right: 15px;
      height: 100%;
      display: none;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
      &:before {
        position: relative;
        top: calc(50% - 12px);
      }
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
    }
    &:hover {
      a.control {
        display: block;
      }
    }
  }
  .lingallery_caption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 4px 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    font-size: 1em;
  }
  .lingallery_thumbnails {
    overflow-x: auto;
    width: 100%;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #eaeaea;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #b4b4b4;
    }
    &::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(100, 100, 100, 0.4);
    }
    .lingallery_thumbnails_content {
      margin-top: 2px;
      width: auto;
      white-space: nowrap;
      .lingallery_thumbnails_content_elem {
        display: inline-block;
        scroll-snap-align: start;
        img {
          border: 2px solid #fff;
          cursor: pointer;
        }
      }
    }
  }
  .lingallery_spinner {
    position: absolute;
    left: 50%;
    top: calc(50% - 32px);
    > div {
      z-index: 9999;
      position: relative;
      left: -50%;
    }
  }
  #largeView {
    display: none;
    &.show {
      display: block;
    }
  }
}
</style>
