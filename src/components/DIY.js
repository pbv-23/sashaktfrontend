import { Link } from 'react-router-dom';

const DIY = () => {
    return ( 
        <div className='act'>
            <Link to="/mainpage" className="back-button">
                Back
            </Link>
        <section className="activities">
            <h1 className="headingd">Origami</h1>
            <div className="box-container">
                <div className="box-button">
                    <Link to="/pikachu" className="cardr">
                        <div className="image-wrapper">
                            <img src="https://www.origamiway.com/images/pikachu/origami-pikachu.jpg" alt="Pikachu"/>
                        </div>
                        <div className="cardr-content">
                            <h3>PIKACHU</h3>
                        </div>
                    </Link>
                </div>
                <div className="box-button">
                    <Link to="/frog" className="cardr">
                        <div className="image-wrapper">
                            <img src="https://www.origamiway.com/images/jumping-frog/origami-jumping-frog.jpg" alt="Jumping Frog"/>
                        </div>
                        <div className="cardr-content">
                            <h3>JUMPING FROG</h3>
                        </div>
                    </Link>
                </div>
                <div className="box-button">
                    <Link to="/rose" className="cardr">
                        <div className="image-wrapper">
                            <img src="https://www.origamiway.com/images/rose/origami-rose-instructions.jpg" alt="Swan"/>
                        </div>
                        <div className="cardr-content">
                            <h3>ROSE</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        </div>
    );
}

export default DIY;
