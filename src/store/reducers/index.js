import { combineReducers } from 'redux';
import MoviesReducers from './movie';
import ActiveMovieReducers from './movie-activel';

const allReducers = combineReducers({
    movies: MoviesReducers,
    activeMovieReducers: ActiveMovieReducers,
});

export default allReducers;