export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie,
    }
}

export const selectAllMovies = (moviesList=[]) => {
    return {
        type: 'ALL_MOVIES_SELECTED',
        payload: moviesList,
    }
}

export const foundMovies = (movies) => {
    return {
        type: 'FOUND_MOVIES',
        payload: movies,
    }
}