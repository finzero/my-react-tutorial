import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Logout' : 'Login'}
      </button>
      <div>You're {isLogin ? 'Logged In' : 'Not Login'}</div>
    </div>
  );
};

export default Login;
