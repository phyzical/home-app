<template>
  <div
    id="error-modal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-modal-body">
      <button
        class="uk-modal-close-default"
        type="button"
        uk-close
        @click="onClose"
      />
      <p
        v-if="isDevMode()"
        class="uk-text-danger"
      >
        {{ status }}
      </p>
      <p
        class="uk-text-danger"
        v-html="message"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getConfig } from '../../helpers/helpers'

export default {
  computed: {
    ...mapGetters({
      message: 'errorMessage',
      status: 'errorStatus'
    })
  },
  watch: {
    message: function () {
      if (this.message.length > 0) {
        this.$uikit.modal('#error-modal').show()
      } else {
        this.$uikit.modal('#error-modal').hide()
      }
    }
  },
  methods: {
    ...mapActions({
      updateError: 'updateError'
    }),
    onClose () {
      this.updateError({ message: '', status: 200 })
    },
    isDevMode () {
      return getConfig().isDev
    }
  }
}
</script>
