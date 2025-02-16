<template>
  <div class="q-pa-lg">
    <q-carousel animated :autoplay="autoplay" v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        v-for="image in images"
        :key="image.id"
        :name="image.name"
        :img-src="image.imgSrc"
        height="50vh"
        :width="500"
      >
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ImagesCocktails',
  data() {
    return {
      images: [
        { id: 1, name: 'first', imgSrc: 'src/assets/images/fruity-cocktail.jpg' },
        { id: 2, name: 'second', imgSrc: 'src/assets/images/orange-drink.jpg' },
        { id: 3, name: 'third', imgSrc: 'src/assets/images/martini.jpg' },
        { id: 4, name: 'fourth', imgSrc: 'src/assets/images/lemon-cocktail.jpg' },
        { id: 5, name: 'fifth', imgSrc: 'src/assets/images/cocktail.jpg' },
        { id: 6, name: 'sixth', imgSrc: 'src/assets/images/orange-cocktail.jpg' }
      ]
    }
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
