import React from 'react';
import './DandD.css';
import { Link } from 'react-router-dom';

const DandD = () => {
    return (
        <div className="dandd-container">
            <img src="DandD.png" alt="Do and dont" className="dandd-image" />
            <Link to="/D">
            <button className="cute-button">Click Me</button>
            </Link>
        </div>
    );
}

export default DandD;
