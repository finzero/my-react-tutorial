import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';
import { setMovie } from '../features/movieSlice';
// import { login, logout } from '../features/authReducer';
import { RootState } from '../store/store';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  const handleLogin = () => {
    // fetch('login').then(res => res.json()).then(response => dispatch(login(response)))
    const response = {
      token: 'haskdhajkdhaksdhk',
      username: 'fazrin mutaqin',
      refreshToken: '12973129379',
    };

    const movie = [{ title: 'kura2 ninja', rating: 20 }];

    dispatch(login(response));
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button
          className="btn btn-sm btn-primary"
          // onClick={() => dispatch(login())}
          onClick={handleLogin}
        >
          Login
        </button>
      ) : (
        <button
          className="btn btn-sm btn-primary"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      )}

      <div>
        You're {isAuthenticated ? 'Logged In' : 'Not Login'} {username}
      </div>
    </div>
  );
};

export default Login;
