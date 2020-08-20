<template>
  <movie-container-list
    v-if="catalog"
    :catalog="catalog"
    page-header-title="Popular Movies"
    @next-page="handleNextPage"
    @previous-page="handlePreviousPage"
    @go-to-page="handleGoToPage"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import MovieContainerList
  from '../components/movies/MovieContainerList.vue'

export default Vue.extend({
  name: 'Index',

  components: {
    MovieContainerList
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

    handleNextPage ():void {
      this.fetchNextPopularMovies()
    },

    handlePreviousPage ():void {
      this.fetchPreviousPopularMovies()
    },

    handleGoToPage (page: number):void {
      this.fetchPagePopularMovies(page)
    }
  }
})
</script>
