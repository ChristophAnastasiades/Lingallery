<template>
    <div class="lingallery" :style="lingalleryStyle">
        <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" :style="figureStyle">
            <div class="lingallery_spinner">
                <half-circle-spinner :animation-duration="1000" :size="60" :color="accentColor" v-if="isLoading"/>
            </div>
            <img :src="currentImage" @click="showNextImage" :class="{ loading: isLoading }" v-touch:swipe.left="showPreviousImage" v-touch:swipe.right="showNextImage">
            <div class="lingallery_caption" v-if="currentCaption" :style="captionStyle">
                {{ currentCaption }}
            </div>
            <a class="control left" @click="showPreviousImage">&#9664;</a>
            <a class="control right" @click="showNextImage">&#9654;</a>
        </figure>
        <div class="lingallery_thumbnails" v-if="showThumbnails">
            <div class="lingallery_thumbnails_content">
                <div v-for="(item, index) in items" class="lingallery_thumbnails_content_elem" :key="index">
                    <img :src="item.thumbnail" v-on="currentIndex !== index ? { click: () => handleImageClick(index) } : {}" height="64" :style="thumbnailStyle(index)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { HalfCircleSpinner } from 'epic-spinners'

  export default {
    name: 'Lingallery',
    data () {
      return {
        currentImage: null,
        currentIndex: 0,
        currentCaption: '',
        windowWidth: 0,
        isLoading: true
      }
    },
    props: {
      items: {
        default: [{
          src: 'https://picsum.photos/600/400/?image=0',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          caption: ''
        }]
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
      }
    },
    components: {
      HalfCircleSpinner
    },
    computed: {
      lingalleryStyle () {
        return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px' : 'width:100%'
      },
      captionStyle () {
        return 'color:' + this.textColor
      }
    },
    asyncComputed: {
      figureStyle () {
        if (this.currentImage) {
          return this.getImageSize(this.currentImage).then(result => {
            let heightValue = 'height:auto'

            // Hide Loader
            this.handleLoader(false)

            if (result.widthValue < result.heightValue) {
              heightValue = 'height:' + this.height + 'px'
            }
            return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px;height:' + this.height + 'px' : 'width:100%;' + heightValue
          }).catch(err => console.log(err))
        } else return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px;height:' + this.height + 'px' : 'width:100%;height:auto'
      }
    },
    methods: {
      handleImageClick (index) {
        this.currentIndex = index
        this.pickImage(index)
      },
      async getImageSize (src) {
        let image = await this.getImage(src)
        return { widthValue: image.naturalWidth, heightValue: image.naturalHeight }
      },
      async getImage (src) {
        return new Promise((resolve, reject) => {
          let img = new Image()
          img.onload = () => resolve(img)
          img.onerror = reject
          img.src = src
        }).catch(() => { console.log('error') })
      },
      handleLoader (isLoading) {
        this.isLoading = isLoading
      },
      pickImage (index) {
        // Show Loader
        this.handleLoader(true)

        this.currentImage = this.items[index].src
        this.currentCaption = this.items[index].caption
      },
      thumbnailStyle (index) {
        let color = this.currentIndex === index ? this.accentColor : this.baseColor
        return 'border-color:' + color
      },
      showNextImage () {
        // Show Loader
        this.handleLoader(true)

        if (this.items.length > (this.currentIndex + 1)) {
          this.currentIndex = this.currentIndex + 1
        } else {
          this.currentIndex = 0
        }

        this.pickImage(this.currentIndex)
      },
      showPreviousImage () {
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
    mounted () {
      this.currentImage = this.items[this.startImage].src
      this.currentCaption = this.items[this.startImage].caption
      this.currentIndex = this.startImage
      this.windowWidth = window.innerWidth
    }
  }
</script>

<style scoped>
    .lingallery {
        max-width: 100%;
    }
    figure {
        position: relative;
        margin: 0;
        padding: 0;
        max-width: 100%;
        text-align: center;
        cursor: pointer;
    }
    figure img {
        max-width: 100%;
        max-height: 100%;
        transition: opacity .25s ease;
    }
    figure img.loading {
        opacity: 0.25;
        min-height: 200px;
        transition: opcacity .25s ease;
    }
    figure a.control {
        position: absolute;
        top: calc(50% - 12px);
        display: none;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
    }
    figure a.control.left {
        left: 5px;
    }
    figure a.control.right {
        right: 5px;
    }
    figure:hover a.control {
        display: block;
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
    }
    .lingallery_thumbnails_content {
        margin-top: 2px;
        width: auto;
        white-space: nowrap;
    }
    .lingallery_thumbnails .lingallery_thumbnails_content_elem {
        display: inline-block;
    }
    .lingallery_thumbnails .lingallery_thumbnails_content_elem img {
        border: 2px solid #fff;
        cursor: pointer;
    }
    .lingallery_spinner {
        position: absolute;
        left: 50%;
        top: calc(50% - 32px);
    }
    .lingallery_spinner > div {
        z-index: 9999;
        position: relative;
        left: -50%;
    }

    /*
     * Scrollbar styling
     */
    .lingallery_thumbnails::-webkit-scrollbar {
        height: 6px;
    }
    .lingallery_thumbnails::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #eaeaea;
    }

    .lingallery_thumbnails::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #b4b4b4;
    }
    .lingallery_thumbnails::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(100,100,100,0.4);
    }
</style>
