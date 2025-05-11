<template>
    <div @click="overlayClick">
        <loading-overlay :is-full-page="false">
            <loading-component slot="custom-loader" />
        </loading-overlay>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoadingOverlayCustom',
    components: {
        LoadingOverlay: () => import('./LoadingOverlay'),
        LoadingComponent: () => import('./LoadingComponent')
    },
    methods: {
        ...mapActions({
            doLoading: 'isLoading'
        }),
        overlayClick () {
            this.doLoading(-1)
        }
    }
}
</script>
