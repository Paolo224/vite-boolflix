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
        <li v-for="serie, index in store.seriesLists">
            <div class="cardSerie">
                <img v-if="(store.seriesLists[index].poster_path) === null"
                    src="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" alt="">
                <img v-else :src="'http://image.tmdb.org/t/p/w185/' + store.seriesLists[index].poster_path" alt="">
                <div class="infoSerie">
                    <h4>
                        {{ serie.name }}
                    </h4>
                    <h5>
                        {{ serie.original_name }}
                    </h5>
                    <p>
                        <img :src="getImagePath(serie.original_language)" alt="flag">
                    </p>
                    <span v-for="n in Math.ceil(serie.vote_average / 2)">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in 5 - (Math.ceil(serie.vote_average / 2))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss">
ul li {
    list-style-type: none;
}

div.cardSerie {
    position: relative;

    img {
        width: 185px;
    }

    div.infoSerie {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;

        span i {
            color: yellow;
        }

        img {
            width: 25px;
        }
    }
}
</style>