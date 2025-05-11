const validationInit = () => {
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

        vuelidateErrorExtractor().then((vuelidateErrorExtractor) => {
            const templates = vuelidateErrorExtractor.templates
            VueClass.use(vuelidateErrorExtractor.default, {
                template: templates.singleErrorExtractor.foundation6,
                messages: defaultMessages,
                attributes: defaultAttributes
            })
            VueClass.component('FormWrapper', templates.FormWrapper)
        })
    })
}

module.exports = {
    validationInit
}
