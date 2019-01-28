import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';


// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = ({query}) => {
    this.setState({
      searchTerm: query
    })
  }

  fetchReviews = (query) => {
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}`
                + `api-key=${NYT_API_KEY}`;
    fetch(URL)
    .then(res => res.json())
    .then(reviews => this.setState({reviews}))
  }

  render() {
    return(
      <div>
        <form onSubmit={this.fetchReviews}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}
