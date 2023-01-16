<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <ul>
            <li v-for="movie in store.moviesLists">
                <h4>
                    {{ movie.title }}
                </h4>
                <h5>
                    {{ movie.original_title }}
                </h5>
                <p>
                    {{ movie.original_language }}
                </p>
                <p>
                    {{ movie.vote_average }}
                </p>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>