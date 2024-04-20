import { Link, useLocation} from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [showBox, setShowBox] = useState(false);

    const location = useLocation();

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const toggleBox = () => {
        setShowBox(!showBox);
    };

    const navbarStyle = {
        backgroundColor: '#3498db', // Change the background color to the desired color
        padding: '5px',
    };

    const boxStyle = {
        display: showBox ? 'block' : 'none',
        backgroundColor: '#fff',
        width: '300px',
        padding: '10px',
        position: 'absolute',
        top: '60px',
        right: '10px',
        zIndex: '999',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        border: '2px solid #ccc',
    };

    const handleEmojiClick = () => {
        toggleBox();
    };

    return (
        <div>
            <header classNameName="header" style={navbarStyle}>
                <Link to="/" classNameName="logo">SASHAKT</Link>
                <nav classNameName={`navbar ${isActive ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="//tandc">T&C</Link>
                    <Link to="//emergency">Emergency</Link>
                </nav>
                <img
                    classNameName="emoji-img"
                    src={sessionStorage.getItem('emoji')}
                    alt="Emoji"
                    onClick={handleEmojiClick}
                />
            </header>
            {/* Render the box conditionally */}
            <div style={boxStyle}>
                <img
                    classNameName="emoji-img2"
                    src={sessionStorage.getItem('emoji')}
                    alt="Emoji"
                />
                <h5 classNameName='username'>{sessionStorage.getItem("Name")}</h5>
                <Link to="/select" classNameName="custom-link">
                    <button classNameName="custom-button">SWITCH PROFILE</button>
                </Link>
            </div>
        </div>
    );
};
export default Navbar;
