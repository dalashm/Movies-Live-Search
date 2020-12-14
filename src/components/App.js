import React, { Component } from 'react';
import MovieList from './MovieList';
import Searchbar from './Searchbar';
class App extends Component {
	render() {
		return (
			<div>
				<div className="w-50 mx-auto mt-5">
					<Searchbar />
				</div>
				<MovieList />
			</div>
		);
	}
}

export default App;
