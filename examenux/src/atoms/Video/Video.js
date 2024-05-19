import React from "react";
import './Video.css'
import YouTubeThumbnail from "../YouTubeThumbnail/YoutubeThumbnail";

function Video({ videoId, title, channelName, visualization, pfpChannel }) {

    const profile = `https://yt3.googleusercontent.com/ytc/${pfpChannel}=s88-c-k-c0x00ffffff-no-rj`;
    return (
        <div className="video-container">
            <YouTubeThumbnail
                videoId={videoId} />
            <div className="video-body">
                <div className="video-logo">
                    <img className='video-logo-imagen' src='https://yt3.googleusercontent.com/ytc/AIdro_meAyneSTdgvlpOKHzcMbdzdWgxAxP1ddecBVcBYFcv8nE=s88-c-k-c0x00ffffff-no-rj' alt="Channel profile" />
                </div>
                <div className="video-info">
                    <h1 className="video-title">{title}</h1>
                    <p className="video-channel-name">
                        {channelName}
                    </p>
                    <p className="video-visualization">
                        {visualization}
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Video;