import React from "react";
import Video from "../../atoms/Video/Video";
import './VideosCopilation.css'

function VideosCopilation() {
  return (
    <div className="Contenedor-videos-Cop">
      <Video
        videoId='0CutVc9WRc4'
        title='Why we hate engineers'
        pfpChannel='https://yt3.googleusercontent.com/ytc/AIdro_meAyneSTdgvlpOKHzcMbdzdWgxAxP1ddecBVcBYFcv8nE=s176-c-k-c0x00ffffff-no-rj'
        channelName='CS Ghost Animation'
        visualization='4.8 M de vistas  hace 1 año' />
      <Video
        videoId='IdneKLhsWOQ'
        title='Taylor Swift - Wildest Dreamss'
        pfpChannel='https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj'
        channelName='Taylor Swift'
        visualization='928,090,167 vistas  30 ago 2015' />
    </div>
  );
}

export default VideosCopilation;