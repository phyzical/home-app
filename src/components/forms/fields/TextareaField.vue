<template>
  <field-container
    :name="name"
    :validator-name="validatorName"
    :class-name="`${name}-container form-textarea-field`"
  >
    <template #content>
      <label
        v-if="label"
        class="uk-form-label"
        :class="labelClass"
        :for="name"
      >{{ label }}</label>
      <input-with-icon-container
        :icon-class="iconClass"
        :icon="icon"
        :put-icon-after-input="putIconAfterInput"
        :focus="focus"
        :is-text="true"
      >
        <template #input>
          <textarea
            v-model="fieldValue"
            :name="name"
            :required="required"
            :disabled="disabled"
            class="uk-textarea"
            :class="{ invalid: isInvalid }"
            rows="3"
            :placeholder="placeholder"
            @keyup.enter="onEnter"
            @focus="onInputFocus"
            @blur="onInputBlur"
          />
        </template>
      </input-with-icon-container>
    </template>
  </field-container>
</template>

<script>
const FieldContainer = () => import('./templates/FieldContainer')
const InputWithIconContainer = () =>
  import('./templates/InputWithIconContainer')

export default {
  components: { FieldContainer, InputWithIconContainer },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    putIconAfterInput: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'name'
    },
    validatorName: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: ''
    },
    v: {
      type: Object,
      default: null
    },
    highlightInvalid: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    showErrorOnBlurOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fieldValue: {
      get () {
        return this.value
      },
      set (value) {
        if (this.v && !this.showErrorOnBlurOnly) {
          this.v.$touch()
        }
        this.$emit('input', value)
      }
    },
    isInvalid () {
      return (
        this.highlightInvalid && this.v && this.v.$invalid && this.v.$dirty
      )
    },
    labelClass () {
      return {
        'uk-hidden': this.hideLabel
      }
    }
  },
  methods: {
    onEnter () {
      this.$emit('onEnter')
    },
    onInputFocus () {
      if (this.v && this.showErrorOnBlurOnly) {
        this.v.$reset()
      }
      this.$emit('onInputFocus')
    },
    onInputBlur () {
      if (this.v && this.showErrorOnBlurOnly) {
        this.v.$touch()
      }
      this.$emit('onInputBlur')
    }
  }
}
</script>
