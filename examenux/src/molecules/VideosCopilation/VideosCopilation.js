import React from "react";
import Video from "../../atoms/Video/Video";
import './VideosCopilation.css'

function VideosCopilation({ tipo }) {
  const continuarViendo = [
    {
      videoId: 'igIfiqqVHtA',
      title: "Taylor Swift - Enchanted (Taylor's Version) (Lyric Video)",
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '44 M de vistas  hace 10 meses  '
    }, {
      videoId: 'q3zqJs7JUCQ',
      title: 'Taylor Swift - Fortnight (feat. Post Malone) (Official Music Video)',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '64,055,922 vistas  hace 4 semanas '
    }, {
      videoId: 'osmzwWw4RYM',
      title: 'Taylor Swift - Timeless (Taylor’s Version) (From The Vault) (Lyric Video)',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '7 M de vistas  hace 10 meses '
    }, {
      videoId: 'tMhiHrL7rPE',
      title: "Taylor Swift - Hey Stephen (Taylor's Version) (Lyric Video)",
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '8.4 M de vistas  hace 3 años'
    }, {
      videoId: 'KZeI9I875Ig',
      title: "Taylor Swift - The Best Day (Taylor's Version) (Lyric Video)",
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '7.4 M de vistas  hace 3 años '
    }, {
      videoId: '9bdLTPNrlEg',
      title: 'Taylor Swift – this is me trying (Official Lyric Video)',
      pfpChannel: 'https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Taylor Swift',
      visualization: '21 M de vistas  hace 3 años'
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
      videoId: '19bfvxm2i5s',
      title: 'Cronología de Galaxia Wander (La leyenda de planta rodadora) Wander Over Yonder - Lalito Rams',
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_mJqMOWcHmOrd1oZtP2801pYuMJjHnXfr89kbvPaFm9-IA=s160-c-k-c0x00ffffff-no-rj',
      channelName: 'LALITO RAMS',
      visualization: '87 K visualizaciones  hace 4 días'
    }, {
      videoId: 'CAb_bCtKuXg',
      title: 'La vida es divertida - Ft. Boyinaband (Video Musical Oficial)',
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_mxpQ2hfudhflswgM8pZg22Jn_bgaQV0gIpUqYQW4z9Av8=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'TheOdd1sOut',
      visualization: '171 M de vistas  hace 5 años'
    },
  ]

  const miMix = [
    {
      videoId: 'jNUTxvki_d0',
      title: "Hell's Greatest Dad Sing-Along | Hazbin Hotel | Prime Video",
      pfpChannel: 'https://yt3.googleusercontent.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Prime Video',
      visualization: '47 M de vistas  hace 3 meses',
    }, {
      videoId: '9sVoglgJjRg',
      title: "Loser, Baby Sing-Along | Hazbin Hotel | Prime Video",
      pfpChannel: 'https://yt3.googleusercontent.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Prime Video',
      visualization: '33 M de vistas  hace 4 meses',
    }, {
      videoId: 'Ai4eh_OCxvw',
      title: "Stayed Gone Music Video | Hazbin Hotel",
      pfpChannel: 'https://yt3.googleusercontent.com/kRPSP7pwm2W6GKGzHx7T00AkPNJEdxpT1s6dzVgz5AgWywKfNnmFjg4J7IYJLRm-Jz2ggK_T7g=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Supaslasher',
      visualization: '10 M de vistas  hace 3 meses',
    }, {
      videoId: 'FKF0runSnzM',
      title: "The Ultimate Hazbin Hotel Sing Along | Hazbin Hotel | Prime Video",
      pfpChannel: 'https://yt3.googleusercontent.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Prime Video',
      visualization: '2.2 M de vistas  hace 1 mes ',
    }, {
      videoId: 'juJkNKodgdE',
      title: "INSANE (A Hazbin Hotel Song) - Black Gryph0n & Baasik",
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_mVEjxZ9LYmm9MXgQuHvhOLzNUNxARW3FMWm57r16BP3XTn=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'Black Gryph0n',
      visualization: '74 M de vistas  hace 2 años ',
    }, {
      videoId: 'DTbfw8_SMmI',
      title: "The Living Tombstone - Alastor's Game (Hazbin Hotel Song)",
      pfpChannel: 'https://yt3.googleusercontent.com/ytc/AIdro_nenUrGjDKt9CONHX-RAJoULoOAEL0QWTiXSVcvMk9MRMw=s176-c-k-c0x00ffffff-no-rj',
      channelName: 'The Living Tombstone',
      visualization: '57 M de vistas  hace 3 años',
    }

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