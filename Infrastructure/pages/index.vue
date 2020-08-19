<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Home</h1>
      <v-text-field
        v-model="username"
        label="username"
        required
      />
      <v-text-field
        v-model="password"
        label="Password"
        required
      />
      <button>
        Send
      </button>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'Index',

  data () {
    return { username: null, password: null }
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
