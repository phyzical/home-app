<template>
    <footer class="footer uk-padding-small">
        <div class="uk-container uk-container-expand uk-flex uk-flex-center">
            <ul>
                <li
                    class="uk-visible"
                >
                    &copy; {{ currentYear() }} Jack Carpenter
                </li>
                <li>
                    version: {{ versionNumber }}
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
import config from '../../helpers/config'
import {currentYear} from "../../helpers/helpers";

export default {
    name: 'GenericFooter',
    computed: {
        versionNumber: function (){
            return config.appVersion
        }
    },
    methods: {
        currentYear(){
            return currentYear();
        },
    }
}
</script>

