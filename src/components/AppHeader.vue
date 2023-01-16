<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            apiKey: 'd5245d1c7515f7cf0f5e303f27c6a28a',
            apiUrlMovie: 'https:api.themoviedb.org/3/search/movie',
            apiUrlSeries: 'https:api.themoviedb.org/3/search/tv',
        }
    },

    methods: {
        getMovies(querySearch) {
            axios.get(this.apiUrlMovie, {
                params: {
                    api_key: this.apiKey,
                    query: querySearch,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.moviesLists = response.data.results;
                    console.log(this.store.moviesLists)
                })
        },
        getSeries(querySearch) {
            axios.get(this.apiUrlSeries, {
                params: {
                    api_key: this.apiKey,
                    query: querySearch,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.seriesLists = response.data.results;
                    console.log(this.store.seriesLists)
                })
        }
    },

    created() {
        // this.getMovies();
    }
}
</script>

<template>
    <header>
        <input type="text" v-model="store.querySearch">
        <button @click="getMovies(store.querySearch), getSeries(store.querySearch)">Search</button>
    </header>
</template>

<style lang="scss" scoped>

</style>
