
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Shorts from '../../atoms/Shorts/Shorts';
import ShortsCompilation from '../../molecules/ShortsCompilation/ShortsCompilation';
import Video from '../../atoms/Video/Video';
import VideosCopilation from '../../molecules/VideosCopilation/VideosCopilation';
import './VideosYBarras.css'


const VideosYBarras = () => {
  return (
    <div className="container">
      <div>
        <SearchBar />
      </div>
      <VideosCopilation />
      <ShortsCompilation />

    </div>
  );
}

export default VideosYBarras;