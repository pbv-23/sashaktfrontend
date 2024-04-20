//MazeHome.js
import React from 'react';
import { Link } from "react-router-dom";

const MazeHome = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://wallpapers.com/images/featured/blue-and-orange-background-zv7dpby3moqrv3uq.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative', // Add position relative to the parent div
    };

    const centerImageStyle = {
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/004/559/972/non_2x/background-with-gradient-and-text-maze-games-for-cover-and-banners-vector.jpg")', // Replace with your image URL
        backgroundSize: 'contain', // Adjust the size as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px', // Adjust width and height as needed
        height: '600px',
    };

    const buttonStyle = {
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/020/967/734/original/play-game-or-start-symbol-colorful-game-button-png.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: '85%',
        left: '52%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        animation: 'pulse 2s infinite',
    };

    return (
        <div style={backgroundImageStyle}>
            <div style={centerImageStyle}>
                <Link to="/level">
                    <button style={buttonStyle}></button>
                </Link>
            </div>
        </div>
    );
}
 
export default MazeHome;
