<template>
  <v-card
    flat
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
    />

    <v-card-title v-text="movie.title" />

    <v-card-subtitle v-text="subtitle" />

    <div class="d-flex justify-space-between align-center px-2">
      <v-rating
        half-increments
        :length="5"
        :value="movie.vote_average / 2"
      />

      <v-chip v-text="movie.vote_count" />
    </div>

    <v-chip
      v-if="movie.adult"
      class="ma-2"
      color="red"
      text-color="white"
      v-text="Adult"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { ICatalogMovie } from '../../../Domain/Entity/Catalog'

export default Vue.extend({
  name: 'MovieList',

  props: {
    movie: {
      type: Object as () => ICatalogMovie,
      required: true
    }
  },

  computed: {
    subtitle (): string {
      return `Original title: ${this.movie.original_title} - Premiered: ${this.movie.release_date}`
    }
  }
})
</script>

<style lang="scss" scoped>
.h-100 {
  height: 10%;
}
</style>
