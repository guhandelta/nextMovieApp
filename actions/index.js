import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []

const CATEGORY_DATA = [
    { id: '1', name: 'Action' },
    { id: '2', name: 'Crime' },
    { id: '3', name: 'Adventure' },
    { id: '4', name: 'Thriller' },
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
        }, 1000)
    })
}

export const getMovies = () => { // this fn() returns a promise
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(MOVIE_DATA)
    //         // reject("Unable to fetch the movie data")
    //     }, 1000)
    // })
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)// axios returns a promise
    // as of how the res obj is defn in axios, the data from res can be extracted from the data param
}

export const createMovie = (movie) => {
    return new Promise((resolve, reject) => {
        movie.id = Math.random().toString(36).substr(2, 7)
        MOVIE_DATA.push(movie)
        setTimeout(() => {
            resolve(MOVIE_DATA) // resolve the updated list of movies
            // reject("Unable to fetch the movie data")
        }, 1000)
    })
}

export const getMovieById = (id) => {

    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)

    // return new Promise((resolve, reject) => {
    //     const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id)
    //     const movie = MOVIE_DATA[movieIndex]
    //     setTimeout(() => resolve(movie), 100)
    // })
}