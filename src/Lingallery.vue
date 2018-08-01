<template>
  <div id="lingallery" :style="lingalleryStyle">
    <figure itemprop="associatedMedia"
            itemscope
            itemtype="http://schema.org/ImageObject" :style="figureStyle">
        <img :src="currentImage" @click="showNextImage">
        <div class="lingallery_caption" v-if="currentCaption" :style="captionStyle">
            {{ currentCaption }}
        </div>
        <a class="control left" @click="showPreviousImage">&#9664;</a>
        <a class="control right" @click="showNextImage">&#9654;</a>
    </figure>
    <div class="lingallery_thumbnails">
        <div class="lingallery_thumbnails_content">
            <div v-for="(item, index) in items" class="lingallery_thumbnails_content_elem" :key="index">
                <img :src="item.thumbnail" @click="handleImageClick(index)" height="64" :style="thumbnailStyle(index)">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lingallery',
  data: () => {
    return {
      currentImage: null,
      currentIndex: 0,
      currentCaption: ''
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
    }
  },
  computed: {
    lingalleryStyle () {
      return window.innerWidth > this.width ? 'width:' + this.width + 'px' : 'width:100%'
    },
    figureStyle () {
      return window.innerWidth > this.width ? 'width:' + this.width + 'px;height:' + this.height + 'px' : 'width:100%;height:auto'
    },
    captionStyle () {
      return 'color:' + this.textColor
    }
  },
  methods: {
    handleImageClick (index) {
      this.currentIndex = index
      this.pickImage(index)
    },
    pickImage (index) {
      this.currentImage = this.items[index].src
      this.currentCaption = this.items[index].caption
    },
    thumbnailStyle (index) {
      let color = this.currentIndex === index ? this.accentColor : this.baseColor
      return 'border-color:' + color
    },
    showNextImage () {
      if (this.items.length > (this.currentIndex + 1)) {
        this.currentIndex = this.currentIndex + 1
      } else {
        this.currentIndex = 0
      }

      this.pickImage(this.currentIndex)
    },
    showPreviousImage () {
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
  }
}
</script>

<style scoped>
    figure {
        position: relative;
        margin: 0;
        padding: 0;
        text-align: center;
        cursor: pointer;
    }
    figure img {
        max-width: 100%;
        max-height: 100%;
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
