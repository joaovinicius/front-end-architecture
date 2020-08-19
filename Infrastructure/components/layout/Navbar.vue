<template>
  <v-app-bar
    app
    absolute
    elevate-on-scroll
  >
    <v-toolbar-title>
      SimpleFlix
    </v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar'
})
</script>
