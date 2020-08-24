<template>
  <movie-container-list
    v-if="watchlist"
    :catalog="watchlist"
    :loading="loading"
    page-header-title="Watchlist"
    @next-page="handleNextPage"
    @go-to-page="handleGoToPage"
  />
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import Paginate from '../../mixins/Paginate'

import MovieContainerList
  from '../../components/movies/MovieContainerList.vue'

export default Paginate.extend({
  name: 'Watchlist',

  middleware: 'authenticated',

  components: {
    MovieContainerList
  },

  async fetch () {
    await this.fetchMyWatchlist()
  },

  computed: {
    ...mapGetters('account', [
      'watchlist',
      'loading'
    ])
  },

  methods: {
    ...mapActions('account', ['fetchMyWatchlist']),

    handleNextPage ():void {
      this.goToNextPage('watchlist-page', '1')
    },

    handleGoToPage (page: number):void {
      this.goToPage('watchlist-page', `${page}`)
    }
  }
})
</script>
