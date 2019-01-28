import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
      query: ''
    }
  }

  handleChange = ({query}) => {
    this.setState({
      query: query
    })
  }
  render() {
    return(
      <form onSubmit={this.fetchReviews}>
        <input type="text" value={this.state.query} onChange={this.handleChange}>
        <input type="submit" value="Search">
      </form>
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
