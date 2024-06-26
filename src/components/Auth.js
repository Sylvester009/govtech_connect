import React from 'react';
import authService from '../services/authService';

const Auth = () => {
  const handleGoogleLogin = async () => {
    try {
      const user = await authService.loginWithGoogle();
      console.log('Logged in user:', user);
      // Add redirection or further actions after successful login
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Auth;
