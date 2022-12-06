import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      return (state = [...state, action.payload]);
    },
  },
});

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
