<template>
  <app-checker
    :use-tokens="false"
    :check-app-is-available="false"
    :class="isLoading ? 'is-loading' : null"
  >
    <app-main />
  </app-checker>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AppMain: () => import('./components/AppMain'),
    AppChecker: () => import('./components/generic/AppChecker')
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>
