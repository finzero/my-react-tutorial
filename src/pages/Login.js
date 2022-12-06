import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  return (
    <div>
      {!isAuthenticated ? (
        <button
          className="btn btn-sm btn-primary"
          onClick={() => dispatch(login())}
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
