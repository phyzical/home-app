<template>
    <!-- This will use either iconClass OR icon, and not both. iconClass will take precedence if both exist. -->
    <span
        v-if="iconClass"
        class="uk-form-icon"
        :class="iconClass"
    />
    <span
        v-else-if="icon"
        class="uk-form-icon"
        :uk-icon="icon"
    />
</template>

<script>

export default {
    props: {
        icon: {
            type: String,
            default: null
        },
        iconClass: {
            type: String,
            default: null
        },
    }
}
</script>
