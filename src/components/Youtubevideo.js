// YouTubeVideo.js
import React from 'react';
import YouTube from 'react-youtube';
import { useParams ,Link} from 'react-router-dom';
import './Youtubepage.css'; 

function YouTubeVideo() {
  const { vid } = useParams();

  const onVideoEnd = () => {
    // Redirect to the next page when the video ends
    window.location.href = '/vidquiz';
  };

  return (
    <div className="fullscreen-video" >
      <Link to="/see" className="back-button">
                Back
            </Link>
      <YouTube
        videoId={vid}
        onEnd={onVideoEnd}
        containerClassName="youtube-container"
      />
    </div>
  );
}

export default YouTubeVideo;
