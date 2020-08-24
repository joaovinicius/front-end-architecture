import Vue from 'vue'

export default Vue.extend({
  name: 'Paginate',

  methods: {
    goToNextPage (routeName: string, page: string, query: string = '') {
      const nextPage = String(parseInt(page, 10) + 1)
      this.$router.push({
        name: routeName,
        params: { page: nextPage, query }
      })
    },

    goToPreviouPage (routeName: string, page: string, query: string = '') {
      const previousPage = String(parseInt(page, 10) - 1)
      this.$router.push({
        name: routeName,
        params: { page: previousPage, query }
      })
    },

    goToPage (routeName: string, page: string, query: string = '') {
      this.$router.push({
        name: routeName,
        params: { page, query }
      })
    }
  }
})
