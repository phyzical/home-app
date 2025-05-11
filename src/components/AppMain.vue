<template>
    <div>
        <loading-overlay-custom />
        <error-modal />
        <generic-header />
        <transition
            name="fade"
            mode="out-in"
            appear
        >
            <router-view />
        </transition>
        <generic-footer />
    </div>
</template>


<script>

export default {
    name: 'AppMain',
    components: {
        LoadingOverlayCustom: () => import("./generic/LoadingOverlayCustom"),
        GenericHeader: () => import("./generic/GenericHeader"),
        GenericFooter: () => import("./generic/GenericFooter"),
        ErrorModal: () => import("./modals/ErrorModal")
    },
};
</script>

<style lang="scss">
    @import "../scss/site.scss";
</style>
