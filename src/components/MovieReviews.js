// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <div class='review-list'>
      {reviews.map(review => <Review />)}
    </div>
  )
}

const Review = ({review}) => {
  return(
    <div class='review'>
      {review}
    </div>
  )
}