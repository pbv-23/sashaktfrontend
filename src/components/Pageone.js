import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const navbarStyle = {
        backgroundColor: '#3498db', // Change the background color to the desired color
    };

    return (
        <div>
            <header className="header" style={navbarStyle}>
                <Link to="/" className="logo">SASHAKT</Link>
                <nav className={`navbar ${isActive ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <a href="#about">About</a>
                    <a href="#tc">T&C</a>
                    <Link to="/em">Emergency</Link>
                </nav>
                </header>
            </div>
    );
};

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="carousel">
            <img
                className="carousel-image"
                src={images[currentImageIndex]}
                alt={`carousel-${currentImageIndex}`}
            />
            <Link to="/pt">
            <div className="button-container">
                <button className="button1"><span></span>LET'S GO*</button>
            </div>
            </Link>
        </div>
    );
};

const PageOne = () => {
    const carouselImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
    ];

    return (
        <div className="PageOne">
            <Navbar />
            <Carousel images={carouselImages} />
            <section id="about">
            <div className='aboutus'>
                <h2 className='heading00'>😇About Us😇</h2>
                <p className='para00'>🤞🏾Welcome to our website! We are a team of passionate individuals dedicated to Child help SASHAKT</p>
                <p className='para00'>🤞🏾Our mission is to tech children with fun, interactive, and engaging gamified platform that educates about their rights and empowers them to stand for themselves and others</p>
                <p className='para00'>🤞🏾Feel free to explore our site and learn more about what we do.</p>
                    <div className="card55-body">
                            <h1 className='pa00'>PLAY</h1>
                            <h6 className="card55-info">section helps the child learn concepts while playing games.</h6>
                        </div>
                        <div className="card55-body">
                            <h1 className='pa00'>SEE</h1>
                            <h6 className="card55-info">section is loaded with audio-visual tools for better comprehension and holistic development..</h6>
                        </div>
               <div className="card55">
                        <div className="card55-body">
                            <h1 className='pa00'>Sensory Development</h1>
                            <h6 className="card55-info">Engaging sensory activities stimulate your child's senses, aiding in cognitive growth and enhancing their ability to explore the world around them.</h6>
                        </div>
                    </div>
                    <div className="card55-body">
                            <h1 className='pa00'>Spatial Relations</h1>
                            <h6 className="card55-info">Through guided play and activities, toddlers develop a sense of spatial awareness and object relationships, crucial for cognitive development.</h6>
                    </div>
                    <div className="card55-body">
                            <h1 className='pa00'>Visual and Auditory Skills</h1>
                            <h6 className="card55-info">Our well-rounded curriculum, designed by child development experts, ensures that your toddler thrives physically, cognitively, and socially.</h6>
                        </div>

  </div>
            </section>
    <section id="tc">
		<div className="backg">
			<div className="t">
				<h3 className="tm">TERMS and CONDITIONS</h3>
				<h6 className="tr">Introduction</h6>
				<p className="c">Welcome to SASHAKT! By using our website and/or using the services that are provided, you acknowledge that you have read, understood, and agree to be bound by our Terms and Conditions. These Terms and Conditions unconditionally extend and apply to all related applications, internet service, or website extensions. If you are not in agreement with all of these Terms and Conditions, you are prohibited from using this Website, and you may discontinue use immediately. SASHAKT recommends that you save or print a copy of these Terms and Conditions for future reference.</p>
				<h6 className="tr">Agreement to Terms and Conditions</h6>
				<p className="c">SASHAKT Terms And Conditions (these "Terms" or these "Terms and Conditions") contained in this Agreement shall govern your use of this Website and all its content (collectively referred to herein as this "Website"). These Terms outline the rules and regulations guiding the use of SASHAKT. All materials/information/documents or all other entities (collectively referred to as content) that appear on the SASHAKT shall be administered subject to these Terms and Conditions. These Terms and Conditions apply in full force and effect to your use of this Website, and the use of this Website constitutes an express agreement with all the terms and conditions contained herein in full. Do not continue to use this Website if you have any objection to any of the Terms and Conditions stated on this page.</p>
				<h6 className="tr">Acceptable Use</h6>
				<p className="c">You may use this Website as permitted by these Terms and Conditions and may not use this Website for any purpose other than for which SASHAKT makes the Website and its services available</p>
				<h6 className="tr">Age limitations</h6>
				<p className="c">There is no age restrictions as this is age appropriate content specially designed for age group of 8 to 16 years.Due to the minority category for signing in the users parent will be intimated about the log-in of the child via E-mail or phone number.Once the child id log's-in guardian must take responsibility of the child regarding the above conditions.  </p>
			</div>
		</div>
	</section>
    <section className="footer" id="contact">

		<div className="box-container">
	
			<div className="box">
				<h3>Quick Links</h3>
				<a href="#">home</a>
				<a href="#about">about</a>
				<a href="#tc">T&C</a>
				<a href="#em">emergency</a>
			</div>
	
			<div className="box">
				<h3>Extra Links</h3>
				<a href="#">confidence building</a>
				<a href="#">sensory development</a>
				<a href="#">linguistic skills</a>
				<a href="#">spatial relations</a>
				<a href="#">visual and auditory skills</a>
				<a href="#">fine motor skills</a>
			</div>
	
			<div className="box">
				<h3>Contact Info</h3>
				<a href="#"> <i className="fas fa-phone"></i> +123-456-7890</a>
				<a href="#"> <i className="fas fa-phone"></i> +111-222-3333</a>
				<a href="#"> <i className="fas fa-envelope"></i> pragathivanamala@gmail.com</a>
				<a href="#"> <i className="fas fa-map"></i> Hyderabad, India - 500036</a>
			</div>
	
			<div className="box">
				<h3>Follow Us</h3>
				<a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
				<a href="#"> <i className="fab fa-instagram"></i> instagram </a>
				<a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
				<a href="#"> <i className="fab fa-twitter"></i> X</a>
			</div>
	
		</div>
	
	</section>
        </div>
    );
};

export default PageOne;
