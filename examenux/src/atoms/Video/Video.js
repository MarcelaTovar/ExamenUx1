import React from "react";
import './Video.css'
import YouTubeThumbnail from "../YouTubeThumbnail/YoutubeThumbnail";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Video({ videoId, title, channelName, visualization, pfpChannel }) {

  const profile = `https://yt3.googleusercontent.com/ytc/${pfpChannel}=s88-c-k-c0x00ffffff-no-rj`;
  return (
    <div className="video-container">
      <Col>
        <div>
          <YouTubeThumbnail
            videoId={videoId} />
        </div>
      </Col>
      <Col>


        <div className="video-body">

          <div className="video-info">
            <Row>
              <Col xs="3" sm="3" md="3">
                <div className="video-logo">
                  <img className='video-logo-imagen' src='https://yt3.googleusercontent.com/ytc/AIdro_meAyneSTdgvlpOKHzcMbdzdWgxAxP1ddecBVcBYFcv8nE=s88-c-k-c0x00ffffff-no-rj' alt="Channel profile" />
                </div>
              </Col>
              <Col xs="9" sm="9" md="9">
                <h1 className="video-title">{title}</h1>
                <p className="video-channel-name">
                  {channelName}
                </p>
                <p className="video-visualization">
                  {visualization}
                </p>
              </Col>
            </Row>

          </div>
        </div>
      </Col>
    </div >
  );
}

export default Video;