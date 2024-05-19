
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Shorts from '../../atoms/Shorts/Shorts';
import ShortsCompilation from '../../molecules/ShortsCompilation/ShortsCompilation';


const VideosYBarras =() =>{
    return(
        <div className="container">
            <div>
            <SearchBar />
            </div>
            <ShortsCompilation/>
        </div>
    );
}

export default VideosYBarras;