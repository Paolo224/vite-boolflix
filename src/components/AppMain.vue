<script>
import { store } from '../store.js'
import AppMovies from './AppMovies.vue'
import AppSeries from './AppSeries.vue'
export default {
    components: {
        AppMovies,
        AppSeries,
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <AppMovies />
        <AppSeries />
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 900px;
    margin: 0 auto;
}
</style>