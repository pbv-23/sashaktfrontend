// AboutSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about">
    <div className="back">
        <h1 className="hea">ABOUT</h1>
        <div className="abo">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                    <Link to="/play">
                            <div className="about-box text-center position-relative">
                                <div className="about-inner">
                                    <div className="about-image position-relative overflow-hidden">
                                        <img src="play.png" alt="play" className="img-fluid"/>
                                        <div className="about-overlay"></div>
                                    </div>
                                    <div className="about-info">
                                        <div className="about-info-inner">
                                            <p className="heading-bigger text-capitalize">PLAY</p>
                                            <p className="aa">Helps the child learn concepts while playing games.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                    <Link to="/see">
                            <div className="about-box text-center position-relative">
                                <div className="about-inner">
                                    <div className="about-image position-relative overflow-hidden">
                                        <img src="see.png" alt="see" className="img-fluid"/>
                                        <div className="about-overlay"></div>
                                    </div>
                                    <div className="about-info">
                                        <div className="about-info-inner">
                                            <p className="heading-bigger text-capitalize">SEE</p>
                                            <p className="aa">Helps in better comprehension and holistic development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                    <Link to="/read">
                            <div className="about-box text-center position-relative">
                                <div className="about-inner">
                                    <div className="about-image position-relative overflow-hidden">
                                        <img src="Untitled design.png" alt="do" className="img-fluid"/>
                                        <div className="about-overlay"></div>
                                    </div>
                                    <div className="about-info">
                                        <div className="about-info-inner">
                                            <p className="heading-bigger text-capitalize">DO</p>
                                            <p className="aa">Helps in BUILDing child's artistic skills while learning here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default AboutSection;
