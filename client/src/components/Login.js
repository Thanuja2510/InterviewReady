import React, { useState } from 'react';
import { logIn } from '../auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert('User logged in successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
