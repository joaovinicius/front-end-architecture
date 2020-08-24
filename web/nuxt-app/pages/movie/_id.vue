<template>
  <v-row v-if="movie">
    <v-col cols="12">
      <div class="d-flex justify-space-between align-center">
        <page-header :title="movie.title" />

        <div>
          <v-btn
            x-large
            title="Authentication required"
            :color="watchlistButtonColor"
            dark
            :disabled="!authenticated"
            :loading="loading"
            class="mr-2"
            @click="handleClick"
            v-text="watchlistButtonLabel"
          />

          <v-btn
            color="primary"
            :to="{ name: 'index' }"
            large
            x-large
          >
            Go back
          </v-btn>
        </div>
      </div>
    </v-col>

    <v-col cols="12">
      <movie-details :movie="movie" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import PageHeader from '../../components/shared/PageHeader.vue'
import MovieDetails from '../../components/movies/MovieDetails.vue'

export default Vue.extend({
  name: 'Movie',

  components: {
    PageHeader,
    MovieDetails
  },

  computed: {
    ...mapGetters('movies', [
      'movie',
      'movieAccountState',
      'loading'
    ]),

    ...mapGetters('authentication', [
      'authenticated'
    ]),

    ...mapGetters('account', [
      'saved'
    ]),

    id (): string {
      return this.$route.params.id
    },

    watchlistButtonLabel (): string {
      return (this.watchlist)
        ? 'Remove from Watchlist' : 'Add to Watchlist'
    },

    watchlistButtonColor (): string {
      return (this.watchlist) ? 'error' : 'secondary'
    },

    watchlist (): boolean {
      if (this.movieAccountState) {
        return this.movieAccountState.watchlist
      }
      return false
    }
  },

  watch: {
    saved (value) {
      this.reloadMovieAccountState(value)
    },

    authenticated (value) {
      this.reloadMovieAccountState(value)
    }
  },

  mounted () {
    this.fetchMovieDetails(this.id)
  },

  methods: {
    ...mapActions('account', ['addToMyWatchlist']),

    ...mapActions('movies', [
      'fetchMovieDetails',
      'fetchMovieAccountState'
    ]),

    reloadMovieAccountState (value: boolean) {
      if (value) {
        this.fetchMovieAccountState(this.id)
      }
    },

    handleClick () {
      this.addToMyWatchlist({
        media_id: this.id,
        watchlist: !this.watchlist
      })
    }
  }
})
</script>
