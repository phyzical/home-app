<template>
    <div :class="{ 'uk-position-relative': hasIcon }">
        <slot name="label" />
        <div
            class="input-wrapper"
            :class="{'text-holder': isText}"
        >
            <slot
                v-if="!putIconAfterInput && hasIcon"
                name="icon"
            >
                <icon
                    :icon-class="iconClass"
                    :icon="icon"
                />
            </slot>
            <slot name="input" />
            <slot
                v-if="putIconAfterInput && hasIcon"
                name="icon"
            >
                <icon
                    :icon-class="iconClass"
                    :icon="icon"
                />
            </slot>
            <slot name="focus">
                <span
                    v-if="focus"
                    class="focus-input"
                />
            </slot>
        </div>
        <slot name="button" />
    </div>
</template>

<script>
const Icon = () => import("./IconContainer");

export default {
    components: { Icon },
    props: {
        icon: {
            type: String,
            default: null
        },
        iconClass: {
            type: String,
            default: null
        },
        focus: {
            type: Boolean,
            default: false
        },
        putIconAfterInput: {
            type: Boolean,
            default: false
        },
        isText: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        hasIcon() {
            return this.iconClass || this.icon;
        }
    }
}
</script>
