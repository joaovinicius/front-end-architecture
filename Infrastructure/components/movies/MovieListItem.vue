<template>
  <v-card
    flat
    :to="{ name: 'movie-id', params: { id: movie.id }}"
    class="h-100 pb-2"
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
        color="amber"
        half-increments
        dense
        readonly
        :length="5"
        size="14"
        :value="movie.vote_average / 2"
      />

      <div class="grey--text ml-4">
        {{ movie.vote_average / 2 }} ({{ movie.vote_count }})
      </div>
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
import Vue, { PropOptions } from 'vue'
import { ICatalogMovie } from '../../../Domain/Entity/Catalog'

export default Vue.extend({
  name: 'MovieList',

  props: {
    movie: {
      type: Object,
      required: true
    } as PropOptions<ICatalogMovie>
  },

  computed: {
    subtitle (): string {
      return `Original title: ${this.movie.original_title} - Release: ${this.movie.release_date}`
    }
  }
})
</script>

<style lang="scss" scoped>
.h-100 {
  height: 100%;
}
</style>
