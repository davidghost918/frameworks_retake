import React from 'react';

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: roundedRating }, (_, i) => <span key={i}>⭐</span>);
  return <div>{stars}</div>;
};

export default Rating;
