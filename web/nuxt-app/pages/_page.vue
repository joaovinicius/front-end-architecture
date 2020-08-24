<template>
  <movie-container-list
    v-if="catalog"
    :catalog="catalog"
    :loading="loading"
    page-header-title="Popular Movies"
    @next-page="handleNextPage"
    @previous-page="handlePreviousPage"
    @go-to-page="handleGoToPage"
  />
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import Paginate from '../mixins/Paginate'

import MovieContainerList
  from '../components/movies/MovieContainerList.vue'

export default Paginate.extend({
  name: 'Page',

  components: {
    MovieContainerList
  },

  async fetch () {
    await this.fetchPopularMovies(this.page)
  },

  computed: {
    ...mapGetters('movies', [
      'catalog',
      'loading'
    ]),

    page (): string {
      return this.$route.params.page
    }
  },

  methods: {
    ...mapActions('movies', [
      'fetchPopularMovies'
    ]),

    handleNextPage ():void {
      this.goToNextPage('page', this.page)
    },

    handlePreviousPage ():void {
      this.goToPreviouPage('page', this.page)
    },

    handleGoToPage (page: number):void {
      this.goToPage('page', `${page}`)
    }
  }
})
</script>
