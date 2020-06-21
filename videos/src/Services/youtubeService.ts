
import axios from 'axios';

export const KEY = 'AIzaSyDeSR7Js2SDUfkJxPBF8zZpAHojDl7ds-Q';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

