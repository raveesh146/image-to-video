import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="Fetched" /> : <p>No image found</p>}
    </div>
  );
};

export default ImageDisplay;
