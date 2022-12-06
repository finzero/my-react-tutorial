import { createReducer, createAction } from '@reduxjs/toolkit';

export const login = createAction('[AUTH] Login');
export const logout = createAction('[AUTH] Logout');

const initialState = {
  isAuthenticated: false,
  username: '',
  refreshToken: '',
  token: '',
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      return (state = {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      });
    })
    .addCase(logout, (state) => (state = initialState));
});

export default authReducer;
