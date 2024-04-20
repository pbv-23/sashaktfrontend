import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [childname, setChildname] = useState('');
  const [uniqueName, setUniqueName] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { uniqueName, childName: childname });
      
      if (response.status === 200) {
        window.location.href = '/mainpage';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      alert('Error logging in. Please try again.');
      console.error(error);
    }
  };
  return (
    <div className="login-container">
      <h1 className="t1111">
        Hey, pop in your regular name and then hit me up with that unique tag
        that's all you! 🌈🔥
      </h1>
      <form onSubmit={handleLogin}>
        <label>
          NAME:
          <input
            type="text"
            value={childname}
            onChange={(e) => setChildname(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          ALIAS :
          <input
            type="text"
            value={uniqueName}
            onChange={(e) => setUniqueName(e.target.value)}
            required
          />
        </label>
        <br />
        <button className="login-button" onClick={handleLogin}type="submit">LOG-IN</button>
      </form>
    </div>
  );
};

export default Login;
