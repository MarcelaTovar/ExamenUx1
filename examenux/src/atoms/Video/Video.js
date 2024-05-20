import React from "react";
import './Video.css'
import YouTubeThumbnail from "../YouTubeThumbnail/YoutubeThumbnail";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Video({ videoId, title, channelName, visualization, pfpChannel, link }) {
  return (
    <div className="video-container">
      <Col className="flex-row flex-nowrap">
        <div className="video-thumbnail">
          <YouTubeThumbnail
            videoId={videoId}
            link={link} />
        </div>
      </Col>
      <Col>
        <div className="video-body">
          <Row>
            <Col xs="3" sm="3" md="3" className="d-flex align-items-center justify-content-center">
              <div className="video-logo">
                <img className='video-logo-imagen' src={pfpChannel} alt="Channel profile" />
              </div>
            </Col>
            <Col xs="9" sm="9" md="9">
              <div className="video-info">
                <h1 className="video-title">{title}</h1>
                <p className="video-channel-name">
                  {channelName}
                </p>
                <p className="video-visualization">
                  {visualization}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </div >
  );
}

export default Video;