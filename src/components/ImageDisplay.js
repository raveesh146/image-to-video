import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="image-display">
      <img src={imageUrl} alt="Fetched actress" />
    </div>
  );
};

export default ImageDisplay;
