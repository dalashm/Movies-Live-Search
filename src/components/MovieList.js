import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, searchMovie } from '../actions';
import Movie from './Movie';

class MovieList extends Component {
	componentDidMount() {
		this.props.fetchMovie();
	}

	renderList() {
		if (this.props.movie.length > 0) {
			return this.props.movie[0].results.map((movie) => {
				return <Movie key={movie.id} data={movie} />;
			});
		}
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<div className="row p-0 m-0 d-flex justify-content-center">{this.renderList()}</div>
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		movie: state.movie
	};
};

// Extracting Data with mapStateToProps
export default connect(MapStateToProps, { fetchMovie, searchMovie })(MovieList);
