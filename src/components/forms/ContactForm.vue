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
import favicon from '../../images/favicon.jpg'

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
      const emailStart = `<html>
                            <head>
                                <meta charset="utf-8">
                                <meta name="mobile-web-app-capable" content="yes">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width,initial-scale=1.0">
                                <link rel="apple-touch-icon" sizes="180x180" href="${favicon}">
                                <link rel="icon" type="image/png" sizes="32x32" href="${favicon}">
                                <link rel="icon" type="image/png" sizes="16x16" href="${favicon}">
                                <link rel="mask-icon" href="${favicon}" color="#5bbad5">
                                <meta name="msapplication-TileColor" content="#ffffff">
                                <meta name="theme-color" content="#ffffff">
                                <link rel="icon" href="${favicon}">
                                <title>Jack Carpenter.dev</title>
                                <style>
                                    p,h1,h2 {
                                        color: white
                                    }
                                    html {
                                        background-color: black;
                                    }
                                </style>
                            </head>
                            <body>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="center">`
      const emailEnd = '<table/></tr></td></body></html>'
      const messageSummary = `<table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr><td align="center"><p>Enquiry Type: ${this.form.subject}</p></td></tr>
                                        <tr><td align="center"><p>Name: ${this.form.name}</p></td></tr>
                                        <tr><td align="center"><p>Phone: ${this.form.phone}</p></td></tr>
                                        <tr><td align="center"><p>Heard About: ${this.form.heardAbout}</p></td></tr>
                                        <tr><td align="center"><p>message: ${this.form.message}</p></td></tr>
                                    </table>`
      const enquiryBody = `${emailStart}
                            ${messageSummary}
                            ${emailEnd}`

      const mailtoLink = `mailto:me@jackcarpenter.dev?subject="New Enquiry"&body=${enquiryBody}`
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
