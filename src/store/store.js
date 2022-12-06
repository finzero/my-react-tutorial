import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import movieReducer from '../features/movieSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
});
