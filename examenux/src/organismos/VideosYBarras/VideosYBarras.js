
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Shorts from '../../atoms/Shorts/Shorts';
import ShortsCompilation from '../../molecules/ShortsCompilation/ShortsCompilation';
import Video from '../../atoms/Video/Video';
import VideosCopilation from '../../molecules/VideosCopilation/VideosCopilation';


const VideosYBarras = () => {
  return (
    <div className="container">
      <div>
        <SearchBar />
      </div>
      <VideosCopilation />
      <ShortsCompilation />
      <Video
        videoId='0CutVc9WRc4'
        title='Why we hate engineers'
        pfpChannel='AIdro_meAyneSTdgvlpOKHzcMbdzdWgxAxP1ddecBVcBYFcv8nE'
        channelName='CS Ghost Animation'
        visualization='4.8 M de vistas  hace 1 año' />

    </div>
  );
}

export default VideosYBarras;