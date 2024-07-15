<template>
  <div class="q-pa-md">
    <main-header :props="props" class="flex flex-center"></main-header>
    <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
      <q-toolbar class="bg-secondary text-white rounded-borders">
        <q-btn round dense flat icon="menu" class="q-mr-xs" />
        <q-space />

        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </div>
    <images-cocktails />
  </div>
</template>

<script>
import { ref } from 'vue'
import ImagesCocktails from 'pages/ImagesCocktails.vue'
import MainHeader from 'src/pages/MainHeader..vue'
export default {
  name: 'MainLayout',
  components: {
    ImagesCocktails,
    MainHeader
  },
  setup() {
    const text = ref('')
    return {
      text
    }
  }
}
</script>
