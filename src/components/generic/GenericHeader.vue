<template>
  <div
    class="header"
    uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
  >
    <nav
      class="uk-navbar-container uk-navbar-transparent"
      uk-navbar
    >
      <menu-button />
    </nav>
    <div
      id="offcanvas-slide"
      uk-offcanvas="flip: true; mode: reveal"
    >
      <div class="uk-offcanvas-bar">
        <div class="left-menu-border" />
        <ul class="uk-nav uk-nav-default">
          <li
            v-for="(page, i) in pages"
            :key="`page-${i}`"
            :class="activePageClass(page.name)"
            @click="menuClick"
          >
            <router-link :to="page.path">
              {{ page.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getRouter } from '../../helpers/helpers'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'GenericHeader',
  components: { MenuButton: () => import('./MenuButton.vue') },
  data: function () {
    return {
      router: getRouter(this)
    }
  },
  computed: {
    ...mapGetters({
      showApps: 'showApps',
      isLoading: 'isLoading'
    }),
    currentPage: function () {
      return this.router.history.current.name
    },
    pages: function () {
      const pagesToExclude = ['Not Found']
      if (!this.showApps) {
        pagesToExclude.push('Apps')
      }
      return this.router.options.routes.filter((route) => {
        return pagesToExclude.indexOf(route.name) === -1
      })
    }
  },
  watch: {
    isLoading () {
      this.router = getRouter(this)
    }
  },
  methods: {
    ...mapActions({
      doLoading: 'isLoading'
    }),
    activePageClass: function (page) {
      return this.currentPage === page ? 'active' : ''
    },
    menuClick: function () {
      this.$uikit.offcanvas('#offcanvas-slide').hide()
      this.doLoading(-1)
    }
  }
}
</script>
