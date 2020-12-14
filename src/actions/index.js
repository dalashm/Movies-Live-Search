// Import Axios Library
import axios from 'axios';

// FetchMovie Action to Fetch List Of Movies
export const fetchMovie = () => async (dispatch) => {
	const { data } = await axios.get(
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2'
	);

	dispatch({ type: 'FETCH_MOVIE', payload: data });
};

// SearchMovies Action to Search For Movies
export const searchMovie = (name) => async (dispatch) => {
	const { data } = await axios.get(
		`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`
	);

	dispatch({ type: 'SEARCH_MOVIE', payload: data });
};
