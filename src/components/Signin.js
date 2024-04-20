import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signin = ({ onSignin }) => {
  const [uniqueName, setUniqueName] = useState('');
  const [childName, setChildName] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    sessionStorage.setItem("uniqueName", decodeURIComponent(uniqueName));
    try {
      if (childName && /\d/.test(uniqueName)) {
        setError('');
        const response = await axios.post('http://localhost:5000/signup', { uniqueName, childName });
        console.log(response.data);
        
        onSignin(childName);
      } else {
        setError('Please enter a valid name and ensure the unique name contains at least one digit.');
      }
    } catch (error) {
      console.error(error);
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="Signin-container">
      <h2 className='t111'>Your details here👇🏿👇🏿</h2>
      <div className="Signin-form">
        <h3 className='t11'>Hey super cool friend!! What's your awesome name? 😊</h3>
        <label>
          Name:
          <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} />
        </label>
        <h3 className='t11'>Can you think of a special name that's all yours? Let's come up with something totally awesome together! 🌟 What do you think?</h3>
        <label>
        Codename:
          <input type="text" value={uniqueName} onChange={(e) => setUniqueName(e.target.value)} />
        </label>
        <button className="Signin-button" onClick={handleSignup}>
          NEXT
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

const Signins = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignup = (uniqueName) => {
    setLoggedInUser(uniqueName);
  };

  return (
    <div className="Signin">
      {loggedInUser ? (
        <Link to="/emoji">
        <div>
          
          <h1 className='rrr'>Hey There!!</h1>
        </div>
        </Link>
      ) : (
        <Signin onSignin={handleSignup} />
      )}
    </div>
  );
};

export default Signins;
