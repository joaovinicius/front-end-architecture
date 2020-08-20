<template>
  <v-row>
    <v-col cols="12">
      <page-header title="Popular Movies" />
    </v-col>

    <v-col cols="12">
      <movie-list
        v-if="catalog"
        :catalog="catalog"
        @next-page="handleNextPage"
        @previous-page="handlePreviousPage"
        @go-to-page="handleGoToPage"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import PageHeader from '../components/shared/PageHeader.vue'
import MovieList from '../components/movies/MovieList.vue'

export default Vue.extend({
  name: 'Index',

  components: {
    PageHeader,
    MovieList
  },

  computed: {
    ...mapGetters('movies', [
      'catalog'
    ])
  },

  mounted () {
    this.fetchPopularMovies()
  },

  methods: {
    ...mapActions('movies', [
      'fetchPopularMovies',
      'fetchNextPopularMovies',
      'fetchPreviousPopularMovies',
      'fetchPagePopularMovies'
    ]),

    handleNextPage () {
      this.fetchNextPopularMovies()
    },

    handlePreviousPage () {
      this.fetchPreviousPopularMovies()
    },

    handleGoToPage (page: number) {
      this.fetchPagePopularMovies(page)
    }
  }
})
</script>
