<template>
  <div id="app">
    <lingallery
      :mobile-height="300"
      :mobile-height-breakpoint="600"
      :addons="{ enableLargeView: true, enablePictureElement: true }"
      :width="600"
      :height="400"
      :items="[
        {
          src: 'https://picsum.photos/600/600/?image=0',
          alt: 'Some alt text',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          caption: 'Some Caption',
          largeViewSrc: 'https://picsum.photos/2000/2000/?image=0',
          pictureElement: [
            {
              srcset: 'https://picsum.photos/1200/1200/?image=0',
              media: '(min-width: 600px)',
              type: 'image/jpg'
            },
            {
              srcset: 'https://picsum.photos/1200/1201/?image=0',
              media: '(min-width: 600px)',
              type: 'image/webp'
            },
            {
              srcset: 'https://picsum.photos/2000/2000/?image=0',
              media: '(min-width: 1200px)'
            }
          ]
        },
        {
          src: 'https://picsum.photos/2000/1200/?image=10',
          alt: 'Another alt text',
          thumbnail: 'https://picsum.photos/64/64/?image=10',
          caption: 'Another Caption'
        },
        {
          src: 'https://picsum.photos/400/600/?image=20',
          largeViewSrc: 'https://picsum.photos/2000/2000/?image=20',
          thumbnail: 'https://picsum.photos/64/64/?image=20'
        },
        {
          src: 'https://picsum.photos/600/400/?image=30',
          thumbnail: 'https://picsum.photos/64/64/?image=30'
        },
        {
          src: 'https://picsum.photos/600/400/?image=40',
          thumbnail: 'https://picsum.photos/64/64/?image=40'
        },
        {
          src: 'https://picsum.photos/600/400/?image=50',
          thumbnail: 'https://picsum.photos/64/64/?image=50'
        },
        {
          src: 'https://picsum.photos/400/600/?image=60',
          thumbnail: 'https://picsum.photos/64/64/?image=60'
        },
        {
          src: 'https://picsum.photos/600/400/?image=70',
          thumbnail: 'https://picsum.photos/64/64/?image=70'
        },
        {
          src: 'https://picsum.photos/600/400/?image=80',
          thumbnail: 'https://picsum.photos/64/64/?image=80'
        },
        {
          src: 'https://picsum.photos/600/400/?image=90',
          thumbnail: 'https://picsum.photos/64/64/?image=90'
        },
        {
          src: 'https://picsum.photos/600/400/?image=100',
          thumbnail: 'https://picsum.photos/64/64/?image=100'
        }
      ]"
    />
  </div>
</template>

<script>
import Lingallery from './components/Lingallery.vue'

export default {
  name: 'App',
  components: {
    Lingallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
