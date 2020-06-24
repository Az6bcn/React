import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it that way', duration: '1:15' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// the keys of this object will be the keys of our Redux Store state object.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
