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
        :loading="loading"
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

    <login v-else />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

import Login from '../authentication/Login.vue'

export default Vue.extend({
  name: 'Navbar',

  components: {
    Login
  },

  data () {
    return {
      query: '' as string,
      timeout: null as any
    }
  },

  computed: {
    ...mapGetters('authentication', ['authenticated']),

    ...mapGetters('movies', ['loading']),

    queryString (): string {
      return this.$route.params.query || ''
    },

    input: {
      get ():string {
        return this.query
      },
      set (query: string):void {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          this.query = query
          this.$router.push({ name: 'search-query', params: { query } })
        }, 500)
      }
    }
  },

  watch: {
    queryString: {
      handler (value) {
        this.query = value
      },
      immediate: true
    }
  }
})
</script>
