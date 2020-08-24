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
import { mapActions, mapGetters } from 'vuex'
import Paginate from '../../mixins/Paginate'

import MovieContainerList
  from '../../components/movies/MovieContainerList.vue'

export default Paginate.extend({
  name: 'WatchlistPage',

  middleware: 'authenticated',

  components: {
    MovieContainerList
  },

  async fetch () {
    await this.fetchMyWatchlist(this.page)
  },

  computed: {
    ...mapGetters('account', [
      'watchlist',
      'loading'
    ]),

    page (): string {
      return this.$route.params.page
    }
  },

  methods: {
    ...mapActions('account', ['fetchMyWatchlist']),

    handleNextPage ():void {
      this.goToNextPage('watchlist-page', this.page)
    },

    handlePreviousPage ():void {
      this.goToPreviouPage('watchlist-page', this.page)
    },

    handleGoToPage (page: number):void {
      this.goToPage('watchlist-page', `${page}`)
    }
  }
})
</script>
