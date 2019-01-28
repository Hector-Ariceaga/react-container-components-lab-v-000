// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
      {reviews.map((review, id) => <Review key={id} movieTitle={review.display_title} reviewTitle={review.headline} author={review.byline} url={review.link.url}/> )}
    </div>
  )
}

const Review = ({key, movieTitle, reviewTitle, author, url}) => {
  return(
    <div className='review'>
      <h3>{movieTitle}</h3>
      <h4>{reviewTitle}</h4>
      <h5>{author}</h5>
      <a href={url}>{url}</a>
    </div>
  )
}

export default MovieReviews;
