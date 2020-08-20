<template>
  <v-app-bar
    app
    fixed
  >
    <v-btn link color="error" :to="{ name: 'index' }">
      SIMPLEFLIX
    </v-btn>

    <v-spacer />

    <v-toolbar flat>
      <v-text-field
        v-model="input"
        placeholder="Search about your favorite movie"
        filled
        rounded
        dense
        hide-details
      />
    </v-toolbar>

    <v-btn
      v-if="authenticated"
      text
      :to="{ name: 'watchlist' }"
    >
      Watchlist
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Navbar',

  data () {
    return {
      query: ''
    }
  },

  computed: {
    ...mapGetters('authentication', ['authenticated']),

    input: {
      get () {
        return this.query
      },
      set (query: string) {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          this.query = query
          this.$router.push({ name: 'search-query', params: { query } })
        }, 300)
      }
    }
  }
})
</script>
