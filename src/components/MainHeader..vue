<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-layout
        view="lHh lpr lFf"
        container
        style="height: 200px"
        class="rounded-borders"
      >
        <q-header
          height="50"
          elevated
          class="bg-grey-3 text-primary mountains-of-christmas-bold"
        >
          <q-toolbar>
            <q-toolbar-title class="text-center" style="font-size: 5em">
              <q-avatar style="font-size: 2em" class="avatar">
                <img src="src/assets/images/FreeVector-Cocktails-Icon.jpg" />
              </q-avatar>
              Mixology
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
      </q-layout>
    </div>
  </div>
</template>
<script>
import { defineOptions } from "vue";
export default {
  name: "MainHeader",
  setup() {
    defineOptions({
      name: "MainHeader",
    });
  },
};
</script>
<style scoped>
.mountains-of-christmas-bold {
  font-family: "Mountains of Christmas", serif;
  font-weight: 800;
  font-style: normal;
}
</style>
