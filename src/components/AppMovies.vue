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
        },
    }
}
</script>

<template>
    <h2>FILM DI BOOLFLIX</h2>
    <ul>
        <li v-for="movie, index in store.moviesLists">
            <div class="cardMovie">
                <div class="black"></div>
                <img v-if="(store.moviesLists[index].poster_path) === null"
                    src="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" alt="">
                <img v-else :src="'http://image.tmdb.org/t/p/w185/' + store.moviesLists[index].poster_path" alt="">
                <div class="infoMovie">
                    <h4>
                        {{ movie.title }}
                    </h4>
                    <h5>
                        {{ movie.original_title }}
                    </h5>
                    <p>
                        <img v-if="store.flags.includes(movie.original_language)"
                            :src="getImagePath(movie.original_language)" alt="Country-Flag">
                    <p v-else>
                        {{ movie.original_language.toUpperCase() }}
                    </p>
                    </p>
                    <span v-for="n in Math.ceil(movie.vote_average / 2)">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in 5 - (Math.ceil(movie.vote_average / 2))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss">
h2 {
    background-color: black;
    color: rgb(188, 20, 20);
    text-align: center;
    padding: .3rem;
}

ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;

    li {
        list-style-type: none;
        width: 185px;
        margin: .4rem;
    }
}

div.cardMovie {
    position: relative;
    border: 3px solid white;
    background-color: white;

    img {
        width: 100%;
    }

    div.black {
        background-color: black;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: .65;
        display: none;
    }

    div.infoMovie {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        display: none;

        span i {
            color: yellow;
        }

        img {
            width: 25px;
        }
    }
}

div.cardMovie:hover div.infoMovie {
    display: block;
    color: white;
}

div.cardMovie:hover div.black {
    display: block;
}
</style>