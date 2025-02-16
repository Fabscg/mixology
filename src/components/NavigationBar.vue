<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md justify-center" style="max-width: 100%">
      <q-tabs v-model="tab" inline-label class="bg-teal text-white shadow-2">
        <q-tab name="home" icon="people" label="Home"></q-tab>
        <q-tab name="history" icon="slow_motion_video" label="History"></q-tab>
        <q-tab name="contact" icon="email" label="Contact Us"></q-tab>
      </q-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  setup() {},
};
</script>
