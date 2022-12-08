import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  isError: false,
  errorMessage: '',
  data: [],
};

export const fetching = createAction('movie/fetching');
export const fetchSuccess = createAction('movie/fetch-success');
export const fetchError = createAction('movie/fetch-error');

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action) => ({ ...state, data: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching, (state) => {
        console.log('do something on movie fetching');
      })
      .addCase(fetchSuccess, (state) => {
        console.log('do something on success fetch');
      })
      .addCase(fetchError, (state) => {
        console.log('do something on error fetch');
      });
  },
});

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
