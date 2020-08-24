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
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import MovieContainerList
  from '../../components/movies/MovieContainerList.vue'

export default Vue.extend({
  name: 'SearchMovie',

  components: {
    MovieContainerList
  },

  computed: {
    ...mapGetters('movies', [
      'catalog',
      'loading'
    ]),

    query ():string {
      return this.$route.params.query
    },

    searchBy ():string {
      return `Search by ${this.query}`
    }
  },

  mounted () {
    this.searchMovies({ query: this.query, page: 1 })
  },

  methods: {
    ...mapActions('movies', ['searchMovies']),

    handleNextPage ():void {
      this.searchMovies({ query: this.query, page: (this.catalog.page + 1) })
    },

    handlePreviousPage ():void {
      this.searchMovies({ query: this.query, page: (this.catalog.page - 1) })
    },

    handleGoToPage (page: number):void {
      this.searchMovies({ query: this.query, page })
    }
  }
})
</script>
