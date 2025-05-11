<template>
  <div>
    <div
      v-if="contactFormMessage.length"
      class="uk-flex uk-flex-center uk-grid-match"
    >
      <div class="uk-width-1-1 uk-text-center">
        <div
          :class="'uk-alert-' + (contactFormSuccess ? 'success' : 'danger')"
          class="uk-padding-small"
        >
          <ul class="uk-list uk-margin-remove">
            <li
              v-for="message in contactFormMessage"
              :key="message.id"
            >
              {{ message }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="uk-card-body uk-padding-remove">
      <form
        class="contact-form"
        @submit.prevent="'submit'"
      >
        <form-wrapper :validator="$v.form">
          <fieldset class="uk-fieldset uk-padding-small uk-grid uk-grid-medium">
            <select-field
              v-model="form.subject"
              name="subject"
              placeholder="subject"
              :options="subjects"
              :v="$v.form.subject"
              class="uk-margin uk-width-1-1"
            />
            <email-field
              v-model="form.email"
              name="email"
              icon="icon: mail"
              placeholder="email"
              :v="$v.form.email"
              class="uk-margin uk-width-1-2@s"
            />
            <numeric-field
              v-model="form.phone"
              :v="$v.form.phone"
              icon="icon: phone"
              name="phone"
              placeholder="phone"
              class="uk-margin uk-width-1-2@s"
            />
            <text-field
              v-model="form.name"
              icon="icon: user"
              name="name"
              :v="$v.form.name"
              class="uk-margin uk-width-1-2@s"
              placeholder="name"
            />
            <text-field
              v-model="form.heardAbout"
              icon="icon: question"
              name="heardAbout"
              :v="$v.form.heardAbout"
              class="uk-margin uk-width-1-2@s"
              placeholder="How did you hear about me?"
            />
            <textarea-field
              v-model="form.message"
              name="message"
              class="uk-width-1-1"
              placeholder="message"
              :v="$v.form.message"
            />
          </fieldset>
        </form-wrapper>
        <div class="uk-modal-footer uk-text-center">
          <button
            name="send"
            type="submit"
            class="uk-button uk-button-primary"
            :disabled="formIsInValid || form.isDisabled"
            @click="sendMessage"
          >
            Enquire Now
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, numeric, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  components: {
    TextField: () => import('./fields/TextField'),
    EmailField: () => import('./fields/EmailField'),
    NumericField: () => import('./fields/NumericField'),
    TextareaField: () => import('./fields/TextareaField'),
    SelectField: () => import('./fields/SelectField.vue')
  },
  data: function () {
    return {
      form: {
        name: null,
        subject: null,
        email: null,
        phone: null,
        message: null,
        heardAbout: null,
        isDisabled: false
      },
      subjects: [
        'General Enquiry',
        'App Request',
        'Website Request',
        'Software Request'
      ],
      contactFormSuccess: true,
      contactFormMessage: [],
      mailGunApp: null
    }
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      phone: { required, numeric },
      message: { required },
      subject: { required },
      heardAbout: { required }
    }
  },
  computed: {
    formIsInValid () {
      return (
        this.$v.form.$invalid || this.$v.form.$pending || this.$v.form.$error
      )
    },
    subjectsObject () {
      return this.subjects.reduce((accumulator, subject) => {
        accumulator[subject] = subject
        return accumulator
      }, {})
    }
  },
  methods: {
    ...mapActions({
      doLoading: 'isLoading'
    }),
    sendMessage () {
      const self = this
      const messageSummary = `Enquiry Type: ${this.form.subject}

                              Name: ${this.form.name}

                              Phone: ${this.form.phone}

                              Heard About: ${this.form.heardAbout}

                              message: ${this.form.message}`

      const mailtoLink = `mailto:me@jackcarpenter.dev?subject=New Enquiry&body=${encodeURIComponent(messageSummary)}`
      window.location.href = mailtoLink
      self.setContactFormMessage(['Message sent.'], true)
      self.resetForm()
    },
    resetForm () {
      this.form = {
        name: null,
        subject: null,
        email: null,
        phone: null,
        message: null,
        heardAbout: null,
        isDisabled: false
      }
      this.$v.$reset()
    },
    setContactFormMessage (message, isSuccess) {
      this.contactFormMessage = message
      this.contactFormSuccess = isSuccess
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-message {
  color: red;
  font-size: 0.6em;
}
</style>
