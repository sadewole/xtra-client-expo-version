import { createSlice } from '@reduxjs/toolkit';

type State = {
  currentSong: any;
};

const initialState: State = {
  currentSong: {},
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      return {
        ...state,
        currentSong: action.payload,
      };
    },
  },
});

export const { setCurrentSong } = playerSlice.actions;

export default playerSlice.reducer;
