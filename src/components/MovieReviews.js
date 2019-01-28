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

const Review = ({review}) => {
  return(
    <div className='review'>
      {console.log(review)}
      {review}
    </div>
  )
}

export default MovieReviews
