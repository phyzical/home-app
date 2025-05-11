<template>
    <div :class="className">
        <form-group :name="formGroupNameToUse">
            <slot name="content" />
        </form-group>
    </div>
</template>

<script>

export default {
    name: "FieldContainer",
    props: {
        className: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: "name"
        },
        validatorName: {
            type: String,
            default: null
        },
    },
    computed: {
        formGroupNameToUse() {
            return this.validatorName || this.name;
        }
    }
}
</script>
