<template>
    <field-container
        :name="name"
        :validator-name="validatorName"
        :class-name="`${name}-container form-numeric-field`"
    >
        <template #content>
            <label
                class="uk-form-label"
                :class="{ 'uk-hidden': hideLabel }"
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
                    <input
                        v-model="fieldValue"
                        type="number"
                        :required="required"
                        :name="name"
                        :disabled="disabled"
                        class="uk-input"
                        :class="{ invalid: isInvalid }"
                        :placeholder="placeholder"
                        :maxlength="size"
                        :autocomplete="name"
                        data-lpignore="true"
                        @blur="onInputBlur"
                        @keyup.enter="onEnter"
                        @focus="onInputFocus"
                    >
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
        size: {
            type: Number,
            default: 20
        },
        value: {
            type: [String, Number],
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
        }
    },
    methods: {
        onInputBlur () {
            if (this.v && this.showErrorOnBlurOnly) {
                this.v.$touch()
            }
            this.$emit('onInputBlur')
        },
        onEnter () {
            this.$emit('onEnter')
        },
        onInputFocus () {
            if (this.v && this.showErrorOnBlurOnly) {
                this.v.$reset()
            }
            this.$emit('onInputFocus')
        }
    }
}
</script>
