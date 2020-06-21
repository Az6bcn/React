import { Video } from './../video';
export interface IVideoItemProps {
    videos?: Array<Video>;
    video?: Video;
    onVideoSelectedCallbackRef?: any;
}