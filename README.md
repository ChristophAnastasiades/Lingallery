# Lingallery
Lingallery is a simple image gallery component for Vue.js. It displays a large image with thumbnails below as you can see in the demo. More features are coming soon.

Please note: Since Lingallery is at a very early development state you should probably not yet use it in a production project.

## Demo
<img src="https://lingulo.com/snippet-content/lingallery/lingallery_screenshot.png">
<br><br>
Check out the live demo here: <a href="https://lingulo.com/snippet-content/lingallery/" target="_blank">https://lingulo.com/snippet-content/lingallery/</a>

## Install

```bash
npm i lingallery
```

## Usage

Here are some examples of how to use Lingallery in a `.vue` file component or inline. 

### Inline usage

You can use it inline:

```html
<lingallery :width="600" :height="400" :items="[
    {src: 'https://picsum.photos/600/400/?image=0', thumbnail: 'https://picsum.photos/64/64/?image=0', caption: 'Some Caption'},
    {src: 'https://picsum.photos/600/400/?image=10', thumbnail: 'https://picsum.photos/64/64/?image=10', caption: 'Another Caption'},
    {src: 'https://picsum.photos/400/600/?image=20', thumbnail: 'https://picsum.photos/64/64/?image=20'}
]"/>
```

Remember to register the component:

```javascript
import Lingallery from 'lingallery';
Vue.component('lingallery', Lingallery);

new Vue({
  el: '#app'
})
```

### Usage in another component

Create a component `Example.vue` and add this:

```vue
<template>
  <lingallery :width="width" :height="height" :items="items"/>
</template>
<script>
  import Lingallery from 'lingallery';
  export default {
    data() {
      return {
        width: 600,
        height: 400,
        items: [{
          src: 'https://picsum.photos/600/400/?image=0',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          caption: 'Some Caption'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }
      ]};
    },
    components: {
      Lingallery
    }
  }
</script>
```

### Usage with Nuxt.js

Since Lingallery uses features that are available only in the browser make sure to start rendering the component in a hook that is not running on the server like `mounted ()` or to use `webpack-node-externals` and whitelist Lingallery like so:

```javascript
build: {
  extend (config, { isDev, isClient, isServer }) {
    if (isServer) {
      config.externals = [
        nodeExternals({
          whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^lingallery/]
        })
      ]
    }
  }
}
```

### Lingallery options

You can pass some props to adapt the behavior and looks of Lingallery.

| Prop        | Description | Default | Type |
|-------------|-------------|---------|------|
| `width` | Specifies the width of the main image area in pixels. | 600 | Number |
| `height` | Specifies the height of the main image area in pixels. | 400 | Number |
| `responsive` | Defines whether the image gallery should take up all available width space. | false | Boolean |
| `startImage` | Sets the index of the image the gallery should start with. | 0 | Number |
| `baseColor` | Defines the base color (at the moment only for the thumbnail border color) | #fff | String |
| `accentColor` | Defines the accent color (at the moment only for the spinner and the active thumbnail border) | #3498db | String |
| `textColor` | Defines the text color of the caption. | #000 | String |

## Why?

I needed a gallery that simply has a large image (without fancy lightbox features etc.) and some thumbnails below. Since I didn't find any I decided to build my own. I am pretty new to Vue.js so please be gentle if you find any errors.