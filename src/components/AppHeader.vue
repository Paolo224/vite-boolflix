<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            apiKey: 'd5245d1c7515f7cf0f5e303f27c6a28a',
            apiUrl: 'https://api.themoviedb.org/3/search/movie?'
        }
    },

    methods: {
        getMovies() {
            axios.get(this.apiUrl, {
                params: {
                    api_Key: this.apiKey,
                    query: 'ladri',
                }
            })
                .then((response) => {
                    console.log(response);
                })
        }
    },

    created() {
        this.getMovies();
    }
}
</script>

<template>
    <header>
        <input type="text">
        <button>Search</button>
    </header>
</template>

<style lang="scss" scoped>

</style>
