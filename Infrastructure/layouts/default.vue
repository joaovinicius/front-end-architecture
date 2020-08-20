<template>
  <v-app v-if="token" dark>
    <Navbar />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import Footer from '../components/layout/Footer.vue'
import Navbar from '../components/layout/Navbar.vue'

export default Vue.extend({
  name: 'Default',

  components: {
    Footer,
    Navbar
  },

  computed: {
    ...mapGetters('authentication', ['token'])
  },

  mounted () {
    this.createRequestToken()
  },

  methods: {
    ...mapActions('authentication', [
      'createRequestToken'
    ])
  }
})
</script>
