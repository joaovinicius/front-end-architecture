<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import Footer from '../components/layout/Footer.vue'
import Navbar from '../components/layout/Navbar.vue'

export default Vue.extend({
  name: 'Default',

  components: {
    Footer,
    Navbar
  }
})
</script>
