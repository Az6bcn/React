import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { IVideoItemProps } from '../../Models/VideoItem /IVideoItemProps';
import { IVideoItemState } from '../../Models/VideoItem /IVideoItemState';
import './VideoItem.css';
import { Video } from '../../Models/video';

export class VideoItem extends Component<IVideoItemProps, IVideoItemState> {
  render() {
    const video = this.props.video;
    return (
      <Card className="clickable" onClick={() => this.onSelectedVideoClick(video)}>
        <Card.Body>
          <Card.Title>{video?.title}</Card.Title>
          <Card.Text>
            <div className="container clickable">
              <div className="row">
                <div className="col-4">
                  <img alt={video?.title} src={video?.thumbnailsUrl} />
                </div>
                <div className="col-8">{video?.description}</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  onSelectedVideoClick(video?: Video) {
    // call callback passed in from App component
    this.props.onVideoSelectedCallbackRef(video);
  }
}
