import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageDisplay from './ImageDisplay';

const ImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = async (query) => {
    try {
      const response = await axios.get(`http://localhost:5000/fetch-image`, {
        params: { q: query }
      });
      setImageUrl(response.data.url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchImage} />
      <ImageDisplay imageUrl={imageUrl} />
    </div>
  );
};

export default ImageFetcher;
