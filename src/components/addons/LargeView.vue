<template>
  <div>
    <div class="lingallery_spinner">
      <half-circle-spinner
        :animation-duration="1000"
        :color="accentColor"
        :size="60"
        v-if="isLoading"
      />
    </div>
    <div
      id="largeViewContainer"
      :class="{ fadeIn: runAnimation, fadeOut: !runAnimation }"
    >
      <img :src="currentImage" />
      <a @click="handleCloseClick"></a>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'

export default {
  name: 'LargeView',
  components: {
    HalfCircleSpinner
  },
  props: {
    currentImage: {
      type: String,
      default: ''
    },
    settings: {
      type: Object,
      default() {
        return {
          maxWidth: 750
        }
      }
    },
    accentColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      runAnimation: true,
      isLoading: true
    }
  },
  methods: {
    async getImage(src) {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      }).catch()
    },
    handleCloseClick() {
      this.runAnimation = false
      window.setTimeout(() => {
        this.runAnimation = true
        this.$emit('close-large-view')
      }, 500)
    }
  },
  mounted() {
    this.getImage(this.currentImage).then(() => {
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
#largeViewContainer {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  &.fadeIn,
  &.fadeOut {
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
  }
  &.fadeOut {
    animation-name: fadeOut;
  }
  img {
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 90vw;
    max-height: 90vh;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 8px 0, rgba(0, 0, 0, 0.14) 0 3px 4px 0,
      rgba(0, 0, 0, 0.12) 0 3px 3px -2px;
    &.fadeIn,
    &.fadeOut {
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    &.fadeOut {
      animation-name: fadeOut;
    }
  }
  a {
    position: fixed;
    top: 10px;
    right: 10px;
    display: block;
    width: 32px;
    height: 32px;
    opacity: 0.5;
    cursor: pointer;
    &:hover,
    &:focus {
      opacity: 1;
    }
    &:before,
    &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #fff;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
