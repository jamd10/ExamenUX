import React from 'react';
import './videoC.css';

const VideoContainer = () => {
  return (
    <div className="video-container">
      <div className="title-container">
        <h1 className="title">Videos Informativos</h1>
      </div>
      <div className="video-wrapper">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/x7m8Ng3L6dE"
          frameBorder="0"
          allowFullScreen
          title="Video 1"
        ></iframe>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/9tuFBdjX340"
          frameBorder="0"
          allowFullScreen
          title="Video 2"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoContainer;
