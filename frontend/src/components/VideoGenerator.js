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
        <div className="video-display">
          <h3>Your Video:</h3>
          <video src={videoUrl} controls  />
          <br />
          <button 
            className="download-button" 
            onClick={() => {
              const link = document.createElement('a');
              link.href = videoUrl;
              link.download = 'generated-video.mp4';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGenerator;
