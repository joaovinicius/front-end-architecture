<template>
  <v-overlay :value="true">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({ name: 'Loader' })
</script>
