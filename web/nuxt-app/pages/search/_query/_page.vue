<template>
  <movie-container-list
    v-if="catalog"
    :catalog="catalog"
    :loading="loading"
    :page-header-title="searchBy"
    @next-page="handleNextPage"
    @previous-page="handlePreviousPage"
    @go-to-page="handleGoToPage"
  />
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import Paginate from '../../../mixins/Paginate'
import MovieContainerList
  from '../../../components/movies/MovieContainerList.vue'

export default Paginate.extend({
  name: 'SearchMoviePage',

  components: {
    MovieContainerList
  },

  async fetch () {
    await this.searchMovies({ query: this.query, page: this.page })
  },

  computed: {
    ...mapGetters('movies', [
      'catalog',
      'loading'
    ]),

    query ():string {
      return this.$route.params.query
    },

    page ():string {
      return this.$route.params.page
    },

    searchBy ():string {
      return `Search by ${this.query}`
    }
  },

  methods: {
    ...mapActions('movies', ['searchMovies']),

    handleNextPage ():void {
      this.goToNextPage('search-query-page', this.page, this.query)
    },

    handlePreviousPage ():void {
      this.goToPreviouPage('search-query-page', this.page, this.query)
    },

    handleGoToPage (page: number):void {
      this.goToPage('search-query-page', `${page}`, this.query)
    }
  }
})
</script>
