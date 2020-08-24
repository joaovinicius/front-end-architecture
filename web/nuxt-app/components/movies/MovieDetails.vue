<template>
  <v-row>
    <v-col cols="4">
      <v-card>
        <v-img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
      </v-card>
    </v-col>
    <v-col cols="8">
      <h2>{{ movie.tagline }}</h2>

      <div class="d-flex align-center mb-2">
        <v-rating
          color="amber"
          half-increments
          dense
          readonly
          :length="5"
          size="14"
          :value="movie.vote_average / 2"
        />

        <div class="grey--text ml-4 d-flex justify-space-between">
          {{ movie.vote_average / 2 }} ({{ movie.vote_count }}) - Popularity: {{ movie.popularity }}
        </div>
      </div>

      <div class="d-flex">
        <v-chip
          v-if="movie.adult"
          color="red"
          text-color="white"
          v-text="Adult"
        />

        <v-chip
          v-for="genre in movie.genres"
          :key="`genre-${genre.id}`"
          class="mr-2"
          v-text="genre.name"
        />
      </div>

      <dl>
        <template v-for="(description, index) in descriptionList">
          <dt
            :key="`dt-${index}`"
            v-text="description.title"
          />
          <dd
            :key="`dd-${index}`"
            v-text="description.description"
          />
        </template>
      </dl>

      <div class="d-flex">
        <v-btn
          depressed
          color="primary"
          :href="movie.homepage"
          target="_blank"
          class="mr-2"
        >
          Homepage
        </v-btn>

        <v-btn
          depressed
          color="yellow"
          :href="`https://www.imdb.com/title/${movie.imdb_id}/`"
          target="_blank"
        >
          IMDb
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import IMovie from '../../../../Domain/Movie/Entity/IMovie'

interface IDescriptionList {
  title: string,
  description:string
}

export default Vue.extend({
  name: 'MovieDetails',

  props: {
    movie: {
      type: Object,
      required: true
    } as PropOptions<IMovie>
  },

  data () {
    return {
      descriptionList: [] as Array<IDescriptionList>
    }
  },

  mounted () {
    this.mountDescriptionList()
  },

  methods: {
    mountDescriptionList () {
      const productionCompanies = this.movie.production_companies
        .map(item => `${item.name}/${item.origin_country}`)

      const productionCountries = this.movie.production_countries
        .map(item => item.name)

      const spokenLanguages = this.movie.spoken_languages
        .map(item => item.name)

      this.descriptionList = [
        { title: 'Original title', description: this.movie.original_title },
        { title: 'Release date', description: `${this.movie.release_date} - ${this.movie.status}` },
        { title: 'Overview', description: this.movie.overview },
        { title: 'Production companies', description: productionCompanies.join(', ') },
        { title: 'Production countries', description: productionCountries.join(', ') },
        { title: 'Original language', description: this.movie.original_language.toUpperCase() },
        { title: 'Spoken languages', description: spokenLanguages.join(', ') }
      ]
    }

  }
})
</script>

<style lang="scss">
$margin: 14px;

dl {
  margin-bottom: $margin;

  dt {
    font-size:16px;
    font-weight: bold;
    margin-top: $margin;
  }
}
</style>
