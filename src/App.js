import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import SearchBar from './components/searchBar'; // Adjust the path if necessary
import ImageDisplay from './components/ImageDisplay'; // Adjust the path if necessary
import {fetchImage} from './components/Script'

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      setError(null);
      const url = await fetchImage(searchTerm);
      setImageUrl(url);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Search for Actress Image</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      <div className="image-display">
        {imageUrl && <img src={imageUrl} alt="Actress" />}
      </div>
    </div>
  );
};

export default App;
