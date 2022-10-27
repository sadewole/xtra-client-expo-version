/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type State = {
  currentSong: any;
  currentSongsList: any[];
  currentIndex: number;
  isActive: boolean;
};

const initialState: State = {
  currentSong: {},
  currentSongsList: [],
  currentIndex: 0,
  isActive: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongsList = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongsList = action.payload?.data?.tracks;
      } else {
        state.currentSongsList = action.payload.data;
      }

      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
  },
});

export const { setCurrentSong } = playerSlice.actions;

export default playerSlice.reducer;
