import React, { useState } from 'react';
import Logos from './flogo.jpg';
import '../App.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const Submit = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/feedback', {uniqueName:sessionStorage.getItem('uniqueName'),feedbackText: feedback});
      setSubmittedFeedback([...submittedFeedback, feedback]);
      setFeedback('');
    }catch(error){
      console.error("Error",error);
    }
  };

  return (
    <div className="container00">
        <Link to="/mainpage" className="back-button00">
        Back
      </Link>
      <img src={Logos} alt="Logo" className="logo00" />
      <h1 className="heading00">Hey, fam! 🌟 How's it going? Drop some real talk on SASHAKT!</h1>
      <p className='para00'>—straight facts or fire emojis, no cap! Your thoughts mean the world. Let's vibe, spill the tea, and level up together. 🚀✨</p>
      <p className='pa00'> #FeedbackTime</p>
      <form onSubmit={Submit} className="form00">
        <label className="label00">
          Enter your feedback:
          <textarea
            className="textarea00"
            value={feedback}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="button00" onClick={Submit}>
          Submit Feedback
        </button>
      </form>
      <div className="submittedFeedback00">
        <h2 className="submittedHeading00">Submitted Feedback:</h2>
        <ul className="feedbackList00">
          {submittedFeedback.map((item, index) => (
            <li key={index} className="feedbackItem00">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackForm;
