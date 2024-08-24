import React, { useState } from 'react';
import axios from 'axios';

const VideoGenerator = ({ imageUrl }) => {
  const [text, setText] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const generateVideo = async () => {
    try {
      const response = await axios.post('http://localhost:5001/generate-video', {
        imageUrl, text
      });
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error('Error generating video:', error);
    }
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text to be spoken"
      />
      <button onClick={generateVideo}>Generate Video</button>

{videoUrl && (
  <div>
    <h3>Your Video:</h3>
    <video src={videoUrl} controls autoPlay />
  </div>
)}
</div>
);
};

export default VideoGenerator;

