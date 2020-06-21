import React, { Component } from 'react';
import { IVideoItemProps } from '../../Models/VideoItem /IVideoItemProps';
import { IVideoItemState } from '../../Models/VideoItem /IVideoItemState';
import { VideoItem } from '../VideoItem/VideoItem';

export default class VideoList extends Component<IVideoItemProps, IVideoItemState> {
  render() {
    const display = this.props.videos?.map((video) => {
      return (
        <VideoItem
          key={video.videoId}
          video={video}
          onVideoSelectedCallbackRef={this.props.onVideoSelectedCallbackRef}
        />
      );
    });

    return <div>{display}</div>;
  }
}
