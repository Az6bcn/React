import React, { Component } from 'react';
import SearchBar from './Components/SeachBar/SearchBar';
import VideoList from './Components/VideoList/VideoList';
import { Video } from './Models/video';
import youtubeService, { KEY } from './Services/youtubeService';
import { AxiosResponse } from 'axios';
import { VideoDetail } from './Components/VideoDetail/VideoDetail';

export default class App extends Component {
  state = { videos: new Array<Video>(), selectedVideo: {} as Video };
  render() {
    return (
      <div className="container-fluid">
        <div>
          <SearchBar whenSearchCriteriaSubmitted={(x) => this.onCriteriaSubmit(x)} />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="col-4">
              <VideoList
                videos={this.state.videos}
                onVideoSelectedCallbackRef={(x) => this.onVideoSelected(x)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // default serach result to load when app loads
    this.onCriteriaSubmit('Man United');
  }
  async onCriteriaSubmit(criteria: string) {
    // make http call to youtube api
    const response = await youtubeService.get('/search', {
      params: {
        q: criteria,

        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });

    const videos = this.mapResponseToVideo(response);
    this.setState({ videos: videos, selectedVideo: videos[0] });
  }

  onVideoSelected(video: Video) {
    this.setState({ selectedVideo: video });
  }
  mapResponseToVideo(response: AxiosResponse<any>) {
    const items = response.data.items as Array<any>;

    const mappedVideo = items.map((item) => {
      const video = {
        description: item.snippet.description,
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumbnailsUrl: item.snippet.thumbnails.default.url,
        width: item.snippet.thumbnails.default.width,
        height: item.snippet.thumbnails.default.height,
      } as Video;

      return video;
    });

    return mappedVideo;
  }
}
