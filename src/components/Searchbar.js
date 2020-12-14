import React, { Component } from 'react';
import { searchMovie } from '../actions';
import { connect } from 'react-redux';
import '../Style.css';

class Searchbar extends Component {
	state = { term: '' };
	inputChange = (e) => {
		this.setState({ term: e.target.value });
	};
	formSubmit = (e) => {
		e.preventDefault();
		this.props.searchMovie(this.state.term);
		this.setState({ term: '' });
	};
	render() {
		return (
			<div>
				<form onSubmit={this.formSubmit} className="form-group w-100">
					<div id="input">
						<input
							type="text"
							value={this.state.term}
							onChange={this.inputChange}
							className="form-control"
							placeholder="search a movie"
						/>

						<i
							id="icon"
							style={this.state.term == '' ? { visibility: 'visible' } : { visibility: 'hidden' }}
							class="fas fa-search"
						/>

					</div>
				</form>
			</div>
		);
	}
}
const stateMapToProps = (state) => {
	return {
		movie: state.search
	};
};
export default connect(stateMapToProps, { searchMovie })(Searchbar);
