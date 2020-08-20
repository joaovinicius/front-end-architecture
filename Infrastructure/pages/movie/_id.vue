<template>
  <v-row v-if="movie">
    <v-col cols="12">
      <div class="d-flex justify-space-between align-center">
        <page-header :title="movie.title" />
        <v-btn
          color="primary"
          :to="{ name: 'index' }"
          large
        >
          Go back
        </v-btn>
      </div>
    </v-col>

    <v-col cols="12">
      <movie-details
        :movie="movie"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import PageHeader from '../../components/shared/PageHeader.vue'
import MovieDetails from '../../components/movies/MovieDetails.vue'

export default Vue.extend({
  name: 'Index',

  components: {
    PageHeader,
    MovieDetails
  },

  computed: {
    ...mapGetters('movies', [
      'movie'
    ]),

    id () {
      return this.$route.params.id
    }
  },

  mounted () {
    this.fetchMovieDetails(this.id)
  },

  methods: {
    ...mapActions('movies', [
      'fetchMovieDetails'
    ])
  }
})
</script>
