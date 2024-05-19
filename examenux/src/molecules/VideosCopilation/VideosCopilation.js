import React from "react";
import Video from "../../atoms/Video/Video";
import './VideosCopilation.css'

function VideosCopilation({ tipo }) {
  const continuarViendo = [
    {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }
  ]
  const recomendados = [
    {
      videoId: '0CutVc9WRc4',
      title: 'Why we hate engineers',
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_meAyneSTdgvlpOKHzcMbdzdWgxAxP1ddecBVcBYFcv8nE=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'CS Ghost Animation',
      visualization: '4.8 M de vistas  hace 1 año',
    }, {
      videoId: '0xiGwCe1eLA',
      title: 'Hipersensibles | Casi Creativo',
      pfpChannel: 'https://yt3.googleusercontent.com/9br1Pl0djfwejCLxcvYc2KmkR-T2KMBM73EFAIHEAmeed-OO0brOEQdjAByIkNpTyOTUJZ8W=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Fred Lammie',
      visualization: '4.1 M de vistas  hace 1 año'
    }, {
      videoId: '3v-xJ4GImIc',
      title: '¿Estallamos una bomba nuclear en la ciudad?',
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_nBMZVFA7nkIFmtpBgbz0LE59y9wmj9AusPTlzeUhW3DA=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'En Pocas Palabras – Kurzgesagt',
      visualization: '436 k vistas  hace 11 días'
    }, {
      videoId: 'ggfQONKyqhQ',
      title: 'DEJEN DE PLANTAR ÁRBOLES',
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_nZf5pkIrBM_4DWqQriBQf3KKmnqlPGQusg9uCNtZMRQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Macakiux',
      visualization: '291 k vistas  hace 3 meses'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    },
  ]

  const miMix = [
    {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015',
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    }, {
      videoId: 'IdneKLhsWOQ',
      title: 'Taylor Swift - Wildest Dreamss',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '928,090,167 vistas  30 ago 2015'
    },

  ]

  return (
    <div className="Contenedor-videos-Cop">
      {
        tipo === "continuarViendo" && continuarViendo.map((video, index) => (
          <Video
            key={index}
            videoId={video.videoId}
            title={video.title}
            pfpChannel={video.pfpChannel}
            channelName={video.channelName}
            visualization={video.visualization}
          />
        ))
      }{
        tipo === "miMix" && miMix.map((video, index) => (
          <Video
            key={index}
            videoId={video.videoId}
            title={video.title}
            pfpChannel={video.pfpChannel}
            channelName={video.channelName}
            visualization={video.visualization}
          />
        ))
      }
      {tipo === "recomendados" && recomendados.map((video, index) => (
        <Video
          key={index}
          videoId={video.videoId}
          title={video.title}
          pfpChannel={video.pfpChannel}
          channelName={video.channelName}
          visualization={video.visualization}
        />
      ))}
    </div>
  );
}

export default VideosCopilation;