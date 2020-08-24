<template>
  <movie-container-list
    v-if="watchlist"
    :catalog="watchlist"
    :loading="loading"
    page-header-title="Watchlist"
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
  name: 'Watchlist',

  middleware: 'authenticated',

  components: {
    MovieContainerList
  },

  computed: {
    ...mapGetters('account', [
      'watchlist',
      'loading'
    ])
  },

  mounted () {
    this.fetchMyWatchlist()
  },

  methods: {
    ...mapActions('account', [
      'fetchMyWatchlist',
      'fetchNextMyWatchlist',
      'fetchPreviousMyWatchlist',
      'fetchPageMyWatchlist'
    ]),

    handleNextPage ():void {
      this.fetchNextMyWatchlist()
    },

    handlePreviousPage ():void {
      this.fetchPreviousMyWatchlist()
    },

    handleGoToPage (page: number):void {
      this.fetchPageMyWatchlist(page)
    }
  }
})
</script>
