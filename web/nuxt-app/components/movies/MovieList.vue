<template>
  <v-row>
    <v-col
      v-for="movie in catalog.results"
      :key="`movie-${movie.id}`"
      cols="3"
    >
      <movie-list-item
        :movie="movie"
      />
    </v-col>

    <v-col cols="12">
      <v-pagination
        :total-visible="6"
        :value="catalog.page"
        :length="catalog.total_pages"
        @next="handleNext"
        @previous="handlePrevious"
        @input="handlePage"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import ICatalog from '../../../../Domain/MovieCatalog/Entity/ICatalog'
import MovieListItem from './MovieListItem.vue'

export default Vue.extend({
  name: 'MovieList',

  components: {
    MovieListItem
  },

  props: {
    catalog: {
      type: Object,
      required: true
    } as PropOptions<ICatalog>
  },

  methods: {
    handleNext ():void {
      this.$emit('next-page')
    },

    handlePrevious ():void {
      this.$emit('previous-page')
    },

    handlePage (value: number):void {
      this.$emit('go-to-page', value)
    }
  }
})
</script>
