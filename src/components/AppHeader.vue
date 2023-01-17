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
                    console.log(this.store.moviesLists);
                    this.store.querySearch = '';
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
                    console.log(this.store.seriesLists);
                    this.store.querySearch = '';
                })
        }
    }
}
</script>

<template>
    <header>
        <h1>
            boolflix
        </h1>
        <input placeholder="Inserisci il film/serieTV che vuoi cercare e clicca 'INVIO'" type="text"
            v-model="store.querySearch" @keyup.enter="getMovies(store.querySearch), getSeries(store.querySearch)">
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    h1 {
        color: rgb(188, 20, 20);
        font-weight: 700;
    }

    input {
        width: 30%;
        padding: .2rem;
        border: 1px solid black;
        border-radius: .4rem;
        background-color: white;
    }
}
</style>
