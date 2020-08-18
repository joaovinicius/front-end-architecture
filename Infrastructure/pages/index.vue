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
      <button @click="handleSubmit">
        Send
      </button>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { AuthenticationRepository }
  from '../../Domain/Repository/AuthenticationRepository'
import { CreateTokenUseCase }
  from '../../Domain/UseCase/CreateToken/CreateTokenUseCase'
import { instance as TMDBRoutes } from '../support/TheMovieDbRoutes'
import { UseCaseFactory } from '../support/UseCaseFactory'

export default Vue.extend({
  name: 'Index',

  data () {
    return { username: null, password: null }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      const createToken = UseCaseFactory(
        AuthenticationRepository, CreateTokenUseCase
      )

      createToken.execute(TMDBRoutes.authenticationTokenNew)
    },

    handleSubmit () {

    }
  }
})
</script>
