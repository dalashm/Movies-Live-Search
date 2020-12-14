import React, { Component } from 'react';
import '../Style.css';

class Movie extends Component {
	render() {
		
		//  Destructure { title, poster_path, vote_average } From Data Usein ES6
		const { title, poster_path, vote_average } = this.props.data;
		
		return (
			<div className="card col-12 col-sm-6 col-md-4 col-lg-2 m-4 p-0">
				<img
					className="card-img-top"
					src={
						poster_path ? (
							`https://image.tmdb.org/t/p/w1280${poster_path}`
						) : (
							'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80'
						)
					}
					alt={title}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">
						<i id="star" class="fas fa-star" /> {vote_average}{' '}
					</p>
				</div>
			</div>
		);
	}
}

export default Movie;
