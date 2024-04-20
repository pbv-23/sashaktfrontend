//MazeLevels.js
import { Link } from "react-router-dom";

const Levels = () => {
    const backgroundImageStyle = {
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url("https://wepik.com/api/image/ai/9ae2e40e-2952-4d53-a6e6-1d4e53aa0148")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    };

    const plainBackgroundStyle = {
        position: 'absolute',
        top:'20%',
        left:'20%',
        width: '900px', // Adjust width as needed
        height: '500px', // Adjust height as needed
        borderRadius: '5%',
        backgroundColor: 'rgba(218, 112, 214, 0.7)',
        border: '10px solid teal', // Blue border with 2px width
        outline: '10px solid skyblue',
        zIndex:'1',
    }

    const buttonStyle = {
        position: 'absolute',
        top:'30%',
        left:'25%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const twobuttonStyle = {
        position: 'absolute',
        top:'30%',
        left:'35%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const threebuttonStyle = {
        position: 'absolute',
        top:'30%',
        left:'45%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const fourbuttonStyle = {
        position: 'absolute',
        top:'30%',
        left:'55%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const fivebuttonStyle = {
        position: 'absolute',
        top:'30%',
        left:'65%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const sixbuttonStyle = {
        position: 'absolute',
        top:'60%',
        left:'25%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const sevenbuttonStyle = {
        position: 'absolute',
        top:'60%',
        left:'35%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const eightbuttonStyle = {
        position: 'absolute',
        top:'60%',
        left:'45%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const ninebuttonStyle = {
        position: 'absolute',
        top:'60%',
        left:'55%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const tenbuttonStyle = {
        position: 'absolute',
        top:'60%',
        left:'65%',
        backgroundColor: '#00BFFF', // Blue background color for the button
        color: 'white', // White text color
        width: '120px', // Adjust button width as needed
        height: '120px', // Adjust button height as needed
        borderRadius: '50%', // Button border radius
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '70px',
        fontWeight: 'bold',
        border: '8px solid white',
        zIndex:'1',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 4)',
        boxShadow: '0 0 10px 2px rgba(0, 0, 0, 2)',
    };

    const homeImageStyle = {
        position: 'absolute',
        top: '15%', // Adjust positioning as needed
        left: '3%', // Adjust positioning as needed
        width: '100px', // Adjust width as needed
        height: '100px', // Adjust height as needed
        backgroundImage: 'url("https://www.pngitem.com/pimgs/m/633-6336446_picture-home-button-png-transparent-png-download.png")', // Add your second image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '50%',// Optional: border radius for rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Optional: add a shadow effect
        zIndex: '1',
    };


    return ( 
        <div style={backgroundImageStyle}>
            <div style={overlayStyle}></div>
            <div style={plainBackgroundStyle}></div>
            <Link to="/games"><button style={homeImageStyle}></button></Link>
            <Link to="/one"><button style={buttonStyle}>1</button></Link>
            <Link to="/two"><button style={twobuttonStyle}>2</button></Link>
            <Link to='/three'><button style={threebuttonStyle}>3</button></Link>
            <Link to='/four'><button style={fourbuttonStyle}>4</button></Link>
            <Link to='/five'><button style={fivebuttonStyle}>5</button></Link>
            <Link to='/six'><button style={sixbuttonStyle}>6</button></Link>
            <Link to='/seven'><button style={sevenbuttonStyle}>7</button></Link>
            <Link to='/eight'><button style={eightbuttonStyle}>8</button></Link>
            <Link to='/nine'><button style={ninebuttonStyle}>9</button></Link>
            <Link to='/ten'><button style={tenbuttonStyle}>10</button></Link>
        </div>
     );
}
 
export default Levels;
