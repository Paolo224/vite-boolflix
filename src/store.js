import { reactive } from 'vue'

export const store = reactive({
    moviesLists: [],
    seriesLists: [],
    querySearch: '',
    flags: [
        'en',
        'es',
        'it',
        'fr',
        'ja'
    ]
})