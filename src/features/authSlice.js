import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  username: '',
  refreshToken: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      return (state = {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      });
    },
    logout: (state) => {
      return (state = initialState);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
