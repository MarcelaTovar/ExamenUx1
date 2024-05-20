import React from 'react';
import './YoutubeThumbnail.css'

const YouTubeThumbnail = ({ videoId, link }) => {

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return (
        <a href={link} className='YoutubeThumbnail-container'>
            <img src={thumbnailUrl} alt="YouTube Thumbnail" className='YoutubeThumbnail-image' />
        </a>
    );
};

export default YouTubeThumbnail;