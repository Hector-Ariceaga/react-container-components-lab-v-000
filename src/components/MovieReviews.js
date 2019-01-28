// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
      {reviews.map(review => <Review />)}
    </div>
  )
}

const Review = ({review}) => {
  return(
    <div className='review'>
      {review}
    </div>
  )
}

export default MovieReviews
