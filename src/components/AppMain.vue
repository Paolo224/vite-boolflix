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
                <p v-if="(movie.original_language == 'it')">
                    <img src="../assets/italia.png" alt="">
                </p>
                <p v-else-if="(movie.original_language == 'en')">
                    <img src="../assets/inghilterra.png" alt="">
                </p>
                <p v-else-if="(movie.original_language == 'fr')">
                    <img src="../assets/francia.png" alt="">
                </p>
                <p v-else-if="(movie.original_language == 'es')">
                    <img src="../assets/spagna.png" alt="">
                </p>
                <p v-else-if="(movie.original_language == 'ja')">
                    <img src="../assets/cina.png" alt="">
                </p>
                <p v-else>
                    {{ movie.original_language.toUpperCase() }}
                </p>
                <p>
                    {{ movie.vote_average }}
                </p>
            </li>
            <li v-for="serie in store.seriesLists">
                <h4>
                    {{ serie.name }}
                </h4>
                <h5>
                    {{ serie.original_name }}
                </h5>
                <p v-if="(serie.original_language == 'it')">
                    <img src="../assets/italia.png" alt="">
                </p>
                <p v-else-if="(serie.original_language == 'en')">
                    <img src="../assets/inghilterra.png" alt="">
                </p>
                <p v-else-if="(serie.original_language == 'fr')">
                    <img src="../assets/francia.png" alt="">
                </p>
                <p v-else-if="(serie.original_language == 'es')">
                    <img src="../assets/spagna.png" alt="">
                </p>
                <p v-else-if="(serie.original_language == 'ja')">
                    <img src="../assets/cina.png" alt="">
                </p>
                <p v-else>
                    {{ serie.original_language.toUpperCase() }}
                </p>
                <p>
                    {{ serie.vote_average }}
                </p>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>