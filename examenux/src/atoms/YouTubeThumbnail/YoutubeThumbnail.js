import React from 'react';
import './YoutubeThumbnail.css'

const YouTubeThumbnail = ({ videoId }) => {

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return (
        <div className='YoutubeThumbnail-container'>
            <img src={thumbnailUrl} alt="YouTube Thumbnail" className='YoutubeThumbnail-image' />
        </div >
    );
};

export default YouTubeThumbnail;