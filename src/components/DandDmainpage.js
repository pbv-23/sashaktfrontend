import React from 'react';
import { Link } from 'react-router-dom';
const RandT = () => {
    return (
        <div className="pikachu-info">
            <Link to="/mainpage" className="back-button">
                Back
            </Link>
            <div className="pikachu-content">
                <div className="pikachu-text">
                    <h1>LEARN HERE!</h1>
                    <img 
                        src="randt.jpg"
                        alt="randt" 
                        className="pikachu-image"
                    />
                    <p>
                        Remember, the roads can be busy, and it's essential to be careful. Following these rules helps keep everyone safe!
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/aT61nwd5U-s" 
                        title="YouTube Video"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="youtube-video"
                    ></iframe>
                </div>
            </div>

            <div className="additional-boxes">
                <div className="additional-box">
                    <h1>Read:</h1>
                    <div className="step-content">
                        <div>
                            <h2>Stop, Look, and Listen:</h2>
                            <p>Always stop at the edge of the road.</p>
                            <p>Look left and right to make sure no cars are coming.</p>
                            <p>Listen for any sounds of cars or bikes.</p>
                        </div>

                        <div>
                            <h2>Hold Hands:</h2>
                            <p>Hold an adult's hand when crossing the road.</p>
                            <p>If there's a crossing guard, listen to them and cross when they say it's safe.</p>
                        </div>

                        <div>
                            <h2>Use Crosswalks:</h2>
                            <p>Cross the road at the crosswalks or pedestrian crossings.</p>
                            <p>Look for the special stripes on the road.</p>
                        </div>

                        <div>
                            <h2>Traffic Lights:</h2>
                            <p>Follow traffic lights. Green means go, red means stop.</p>
                            <p>Wait for the green light to cross.</p>
                        </div>

                        <div>
                            <h2>Stay on the Sidewalk:</h2>
                            <p>Walk on the sidewalk, not on the road.</p>
                            <p>If there's no sidewalk, walk on the side facing the traffic.</p>
                        </div>

                        <div>
                            <h2>Wear Bright Clothes:</h2>
                            <p>Wear bright colors so drivers can see you easily.</p>
                        </div>

                        <div>
                            <h2>Helmets for Biking:</h2>
                            <p>Always wear your helmet when riding a bike or scooter.</p>
                        </div>

                        <div>
                            <h2>No Running on the Road:</h2>
                            <p>Never run onto the road without looking.</p>
                        </div>

                        <div>
                            <h2>Be Visible:</h2>
                            <p>If it's dark, carry a flashlight or wear something reflective.</p>
                        </div>

                        <div>
                            <h2>Stay in the Car:</h2>
                            <p>Always sit in the back seat and wear your seatbelt when in a car.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandT;
