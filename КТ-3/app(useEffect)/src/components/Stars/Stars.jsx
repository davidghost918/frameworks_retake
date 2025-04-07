import React from 'react';
import './Stars.css';

function Stars({ rating }) {
  const totalStars = 5;

  const activeStars = Math.round(rating);

  const starsArray = [];
  for (let i = 1; i <= totalStars; i++) {

    if (i <= activeStars) {
      starsArray.push(<span key={i} className="fa fa-star active"></span>);
    } else {
      starsArray.push(<span key={i} className="fa fa-star"></span>);
    }
  }

  return <div>{starsArray}</div>;
}

export default Stars;
