
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ShortsCompilation from '../../molecules/ShortsCompilation/ShortsCompilation';
import VideosCopilation from '../../molecules/VideosCopilation/VideosCopilation';
import './VideosYBarras.css'


const VideosYBarras = () => {
  return (
    <div className="container">
      <div>
        <SearchBar />
      </div>
      <h2>Continuar Viendo</h2>
      <VideosCopilation
        tipo='continuarViendo' />
      <h2>Recomendaciones</h2>
      <VideosCopilation
        tipo='recomendados' />f
      <h2>Mi Mix</h2>
      <VideosCopilation
        tipo='miMix' />
      <h2>Shorts</h2>
      <ShortsCompilation />

    </div>
  );
}

export default VideosYBarras;