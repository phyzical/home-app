<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="false"
    :is-full-page="isFullPage"
    :loader="loaderType"
  >
    <div
      v-if="beforeMessage"
      slot="before"
      class="before-message"
    >
      {{ beforeMessage }}
    </div>
    <div
      v-if="hasCustomLoader"
      slot="default"
      class="default"
    >
      <slot name="custom-loader" />
    </div>
    <div
      v-if="afterMessage"
      slot="after"
      class="after-message"
    >
      {{ afterMessage }}
    </div>
  </loading>
</template>

<script>
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
const Loading = () => import('vue-loading-overlay')
export default {
  components: {
    Loading
  },
  props: {
    isFullPage: {
      type: Boolean,
      default: true
    },
    loaderType: {
      type: String,
      default: 'dots'
    },
    beforeMessage: {
      type: String,
      default: null
    },
    afterMessage: {
      type: String,
      default: null
    }
  },
  computed: {
    hasCustomLoader () {
      return !!this.$slots['custom-loader']
    },
    ...mapGetters(['isLoading'])
  }
}
</script>

<!-- This guy is why your loading message no longer exists -->
<style type="text/css">
.lds-ellipsis {
  display: none;
}

#app {
  display: block;
}
</style>
