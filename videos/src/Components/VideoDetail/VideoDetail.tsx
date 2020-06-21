import React from 'react';
import { IVideoDetailProps } from '../../Models/VideoDetail/IVideoDetailProps';
import { IVideoItemState } from '../../Models/VideoItem /IVideoItemState';
import Card from 'react-bootstrap/Card';
import { Video } from '../../Models/video';
import './VideoDetail.css';

export class VideoDetail extends React.Component<IVideoDetailProps, IVideoItemState> {
  private url: string = 'https://www.youtube.com/embed';
  render() {
    return <div>{this.getdisplay(this.props.selectedVideo)}</div>;
  }

  getdisplay(selectedVideo: Video | undefined) {
    if (Object.keys(selectedVideo as Video).length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>
          <iframe
            className="frame"
            title="Video player"
            src={`${this.url}/${selectedVideo?.videoId}`}></iframe>
        </div>
        <div>
          <Card className="card-width">
            <Card.Body>
              <Card.Text>{selectedVideo?.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

// IFrame: is an html element, that makes a request to an outside website asides the one the user is seeing on the screen.
// makes a request on its own without any ajax or stuff like that.
