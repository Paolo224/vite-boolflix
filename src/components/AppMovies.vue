<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },

    methods: {
        getImagePath: function (imgpath) {
            return new URL(`../assets/${imgpath}.png`, import.meta.url).href
        }
    }
}
</script>

<template>
    <ul>
        <li v-for="movie, index in store.moviesLists">
            <div class="cardMovie">
                <img v-if="(store.moviesLists[index].poster_path) === null"
                    src="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" alt="">
                <img v-else :src="'http://image.tmdb.org/t/p/w342/' + store.moviesLists[index].poster_path" alt="">
                <div class="infoMovie">
                    <h4>
                        {{ movie.title }}
                    </h4>
                    <h5>
                        {{ movie.original_title }}
                    </h5>
                    <p>
                        <img :src="getImagePath(movie.original_language)" alt="flag">
                    </p>
                    <p>
                        {{
    Math.ceil(movie.vote_average / 2)
                        }}
                    </p>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss">
ul li {
    list-style-type: none;
}

div.cardMovie {
    position: relative;

    div.infoMovie {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
    }
}
</style>