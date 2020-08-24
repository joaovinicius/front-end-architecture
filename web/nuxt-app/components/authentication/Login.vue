<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400px"
    overlay-opacity=".9"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Sign In
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">
          Sign In
        </span>
      </v-card-title>

      <v-card-text class="pb-0">
        <v-text-field
          v-model="username"
          outlined
          clearable
          :rules="[required]"
          label="Username"
        />
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[required]"
          outlined
          clearable
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          @click:append="showPassword = !showPassword"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="blue darken-1"
          text
          @click="closeDialog"
        >
          Cancel
        </v-btn>

        <v-spacer />

        <v-btn
          color="primary"
          :disabled="!enabledSubmitButton"
          @click="handleSubmit"
        >
          Sign In
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'Login',

  data () {
    return {
      dialog: false as boolean,
      username: '' as string,
      password: '' as string,
      showPassword: false,
      required: (value: any) => !!value || 'Required.'
    }
  },

  computed: {
    enabledSubmitButton (): boolean {
      return !!this.username && !!this.password
    }
  },

  methods: {
    ...mapActions('authentication', [
      'createTokenWithLogin'
    ]),

    closeDialog ():void {
      this.dialog = false
    },

    handleSubmit (): void {
      this.createTokenWithLogin({
        username: this.username,
        password: this.password
      })
    }
  }
})
</script>
