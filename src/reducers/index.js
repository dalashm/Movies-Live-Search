import { combineReducers } from 'redux';
const movieReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_MOVIE':
			return [ action.payload ];
			break;
		case 'SEARCH_MOVIE':
			return [ action.payload ];
			break;
		default:
			return state;
	}
};

export default combineReducers({
	movie: movieReducer
});
