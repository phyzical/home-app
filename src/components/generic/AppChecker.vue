<template>
  <div
    id="app"
    :class="!compatibleBrowser ? 'uk-padding-remove' : ''"
  >
    <div
      v-if="!compatibleBrowser"
      class="upgrade-browser"
    >
      <section class="landing uk-padding uk-position-center">
        <div class="uk-container">
          <p class="uk-h2">
            {{ message }}
          </p>
        </div>
      </section>
    </div>
    <slot v-if="compatibleBrowser">
      <div>I AM DEFAULT CONTENT</div>
    </slot>
  </div>
</template>

<script>
import { getConfig, kebabCaseToWords } from '../../helpers/helpers'

export default {
  props: {
    appNameForMessage: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      compatibleBrowser: true,
      refreshing: false,
      registration: null,
      messageDots: ''
    }
  },
  computed: {
    message () {
      let message = ''
      switch (this.appIsAvailable) {
      case true:
        message = 'Incompatible Browser. Please Upgrade'
        break
      case false:
        message =
          (this.appNameForDisplay
            ? `${this.appNameForDisplay} is currently`
            : 'Currently') +
          ' down for maintenance. Please check back shortly'
        break
      default:
        message = this.appNameForDisplay
          ? `${this.appNameForDisplay} is loading`
          : 'Loading'
        break
      }

      return `${message}${this.messageDots}`
    },
    appNameForDisplay () {
      let appName = this.appNameForMessage
      const configAppName = getConfig().appName
      if (!appName && configAppName) {
        appName = kebabCaseToWords(configAppName) + ' by Simonds'
      }
      return appName
    }
  },
  created () {
    document.addEventListener(
      'swUpdated',
      (e) => {
        this.registration = e.detail
      },
      { once: true }
    )
    // controllerchange fires when a new service worker takes control of the current page
    if (typeof navigator.serviceWorker !== 'undefined') {
      navigator.serviceWorker.addEventListener('controllerchange', () => {})
    }
  },
  mounted: function () {
    this.checkCompatibility()
    const doMessageDots = () => {
      if (this.messageDots.length >= 3) {
        this.messageDots = ''
      } else {
        this.messageDots += '.'
      }
    }
    doMessageDots()
    setInterval(doMessageDots, 300)
  },
  methods: {
    checkCompatibility () {
      if (navigator.appName === 'Microsoft Internet Explorer') {
        // If IE is <= v10
        this.compatibleBrowser = false
      }
      if (!this.compatibleBrowser) {
        console.log('Incompatible browser, please upgrade!')
      }
    }
  }
}
</script>
