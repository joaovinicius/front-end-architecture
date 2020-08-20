<template>
  <div>
    <h1 v-text="title" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageHeader',

  props: {
    title: {
      type: String,
      required: false,
      default: 'Título'
    }
  }
})
</script>
