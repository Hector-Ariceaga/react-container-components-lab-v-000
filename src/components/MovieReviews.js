// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
    {console.log(reviews)}
      {reviews.map(review => <Review movieTitle={display_title} reviewTitle={headline} author={byline} url={link.url}/> )}
    </div>
  )
}

const Review = ({movieTitle, reviewTitle, author, url}) => {
  return(
    <div className='review'>
      <h3>{movieTitle}</h3>
      <h4>{reviewTitle}<h4>
      <h5>{author}<h5>
      <a href={url}>{url}</a>
    </div>
  )
}

export default MovieReviews
