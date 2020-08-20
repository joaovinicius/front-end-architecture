<template>
  <v-row>
    <v-col cols="12">
      <page-header :title="pageHeaderTitle" />
    </v-col>

    <v-col cols="12">
      <movie-list
        v-if="catalog"
        :catalog="catalog"
        @next-page="handleNextPage"
        @previous-page="handlePreviousPage"
        @go-to-page="handleGoToPage"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

import { Catalog } from '../../../Domain/Entity/Catalog'
import PageHeader from '../shared/PageHeader.vue'
import MovieList from './MovieList.vue'

export default Vue.extend({
  name: 'Index',

  components: {
    PageHeader,
    MovieList
  },

  props: {
    pageHeaderTitle: {
      type: String,
      required: true
    },

    catalog: {
      type: Catalog,
      required: true
    }
  },

  methods: {
    handleNextPage () {
      this.$emit('next-page')
    },

    handlePreviousPage () {
      this.$emit('previous-page')
    },

    handleGoToPage (page: number) {
      this.$emit('go-to-page', page)
    }
  }
})
</script>

<style>

</style>
