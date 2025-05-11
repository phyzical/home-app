<template>
    <div
        class="uk-width-1-1 uk-grid uk-grid-collapse"
        uk-grid
    >
        <div
            v-for="(project,i) in projects"
            :key="`project-${i}`"
            class="uk-width-1-2@m uk-width-1-1@s uk-card uk-card-small uk-card-default project"
        >
            <div class="uk-card-header uk-align-center ">
                <div
                    class="uk-grid-small uk-flex-middle "
                    uk-grid
                >
                    <div class="uk-width-auto">
                        <img
                            width="100"
                            height="100%"
                            :data-src="project.image"
                            uk-img
                        >
                    </div>
                    <div class="uk-width-expand uk-align-center">
                        <h3 class="uk-card-title uk-margin-remove-bottom">
                            {{ project.title }}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <div
                    v-html="project.body"
                />
            </div>
            <div class="uk-card-footer">
                <a
                    v-if="project.link"
                    :href="project.link"
                    class="uk-button uk-button-text"
                >
                    Go To Website
                </a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ProjectsComponent',
    props: {
        projects:{
            type: Array,
            default: () => []
        }
    }
}
</script>
