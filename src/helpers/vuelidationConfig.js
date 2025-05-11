const validationInit = (customVuelidationConfig = {}) => {
    const Vue = () => import('vue')
    const vuelidate = () => import('vuelidate')
    const vuelidateErrorExtractor = () => import('vuelidate-error-extractor')
    Vue().then((VuePromise) => {
        const VueClass = VuePromise.default
        vuelidate().then((vuelidatePromise) =>
            VueClass.use(vuelidatePromise.default)
        )

        const defaultMessages = {
            numeric: 'The {attribute} entered is invalid',
            required: 'The {attribute} field is required',
            email: 'The {attribute} entered is invalid',
            integer: 'The {attribute} entered is invalid'
        }

        const defaultAttributes = {
            email: 'email',
            jobNo: 'job number',
            expiryMonth: 'expiry month',
            expiryYear: 'expiry year',
            cardholderName: 'full name',
            cardNumber: 'card number',
            mobileNumber: 'mobile number'
        }

        const customMessages = Object.prototype.hasOwnProperty.call(
            customVuelidationConfig,
            'messages'
        )
            ? customVuelidationConfig.messages
            : {}
        const customAttributes = Object.prototype.hasOwnProperty.call(
            customVuelidationConfig,
            'attributes'
        )
            ? customVuelidationConfig.attributes
            : {}

        vuelidateErrorExtractor().then((vuelidateErrorExtractor) => {
            const templates = vuelidateErrorExtractor.templates
            VueClass.use(vuelidateErrorExtractor.default, {
                /**
         * Optionally provide the template in the configuration.
         * or register like so Vue.component("FormField", templates.singleErrorExtractor.foundation6)
         */
                template: templates.singleErrorExtractor.foundation6, // you can also pass your own custom template
                messages: {
                    ...defaultMessages,
                    ...customMessages
                }, // error messages to use
                attributes: {
                    // maps form keys to actual field names
                    ...defaultAttributes,
                    ...customAttributes
                }
            })
            VueClass.component('FormWrapper', templates.FormWrapper)
        })
    })
}

module.exports = {
    validationInit
}
