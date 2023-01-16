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
            <li v-for="movie, index in store.moviesLists">
                <div class="card">
                    <img v-if="(store.moviesLists[index].backdrop_path) === null"
                        src="https://thumbnails.pcgamingwiki.com/a/ab/ERROR_Human_Not_Found_cover.jpg/300px-ERROR_Human_Not_Found_cover.jpg"
                        alt="">
                    <img :src="'http://image.tmdb.org/t/p/w342/' + store.moviesLists[index].backdrop_path" alt="">
                    <div class="info">
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
                    </div>
                </div>
            </li>
            <li v-for="serie, index in store.seriesLists">
                <div class="card">
                    <img v-if="(store.seriesLists[index].backdrop_path) === null"
                        src="https://thumbnails.pcgamingwiki.com/a/ab/ERROR_Human_Not_Found_cover.jpg/300px-ERROR_Human_Not_Found_cover.jpg"
                        alt="">
                    <img :src="'http://image.tmdb.org/t/p/w342/' + store.seriesLists[index].backdrop_path" alt="">
                </div>
                <div class="info">
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
                </div>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
div.card {
    position: relative;
}

div.info {
    position: absolute;
    z-index: 2;
}
</style>