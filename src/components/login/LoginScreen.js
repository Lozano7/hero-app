import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const handleLogin = () => {
    console.log('Login');
    navigate('/', {
      replace: true,
    });
  };
  const navigate = useNavigate();
  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
