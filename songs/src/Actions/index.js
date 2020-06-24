// Action Creator
export const SelectSongActionCreator = (song) => {
  // Return an Action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
