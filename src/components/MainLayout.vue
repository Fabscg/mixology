<template>
  <div>
    <the-navigation />
    <div>
      <main-header
        :props="props.title"
        :subtitle="props.subtitle"
      ></main-header>
      <div class="q-pa-md" style="max-width: 300px">
        <q-input
          standout
          bottom-slots
          v-model="text"
          label="Type your drink"
          counter
          maxlength="12"
          :dense="dense"
          width="200px"
        >
          <template v-slot:before>
            <q-icon name="local_bar" />
          </template>

          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>

          <template v-slot:hint> Field hint </template>
        </q-input>
      </div>
      <div>
        <images-cocktails />
      </div>
    </div>
  </div>
</template>

<script>
import ImagesCocktails from "pages/ImagesCocktails.vue";
import MainHeader from "src/components/MainHeader..vue";
import TheNavigation from "src/components/TheNavigation.vue";
export default {
  name: "MainLayout",
  components: {
    ImagesCocktails,
    MainHeader,
    TheNavigation,
  },
  data() {
    return {
      props: {
        title: "Mixology",
        subtitle: "Find your favorite cocktail",
        dense: true,
      },
    };
  },
  setup() {},
};
</script>
