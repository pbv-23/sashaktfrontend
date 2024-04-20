import { Link } from 'react-router-dom';
import '../App.css';

const Activities = () => {
  const cardStyle = {
    overflow: 'hidden',
  };
  
  return (
    <div>
          <div className="buttonContainerStyle77" style={{  left: 0, margin: '15px' }}>
        <Link to="/top">
        <img
        className="emoji-img"
        src={sessionStorage.getItem('emoji')}
        />

        </Link>
      </div>
      <div className="buttonContainerStyle77"style={{ right: 0, margin: '15px' }}>
        <Link to="/ff">
          <img src="fff.jpg"  className="imageSize77" alt="Top Right" />
        </Link>
      </div>
    <div className='acbackground-image'>
      <div className="container22 mt-5">
        <div className="row">
                    <div className="col-lg-4 mb-3">
                    <Link to="/See">
                    <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body22">
                            <img  src="stories.jpeg" className="custom-image1" alt="Video"/>
                        </div>
                        <div className="textstyle22">Discover the World of Super Fun Videos!</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/play">
                    <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body22">
                            <img  src="games.jpeg" className="custom-image" alt="games" />
                        </div>
                        <div className="textstyle22">Time for Game Galore!</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/read">
                    <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body22">
                            <img  src="videos.jpeg" className="custom-image" alt="stories"/>
                        </div>
                        <div className="textstyle22">Let's dive into Storytime Adventures!</div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            <div className="container222 mt-5">
            <div className="row">
            <div className="col-lg-4 mb-3">
                    <Link to="/know">
                    <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body22">
                            <img  src="knowyourrights.jpg" className="custom-image" alt="know your rights"/>
                        </div>
                        <div className="textstyle22">Explore Your Rights and Wrongs!</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/diy">
                    <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body22">
                            <img  src="diy.jpeg" className="custom-image" alt="DIY"/>
                        </div>
                        <div className="textstyle22">Dive into Creative DIY crafts!</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/DandD">
                    <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body22">
                            <img  src="dosanddonts.jpeg" className="custom-image" alt="Know Them"/>
                        </div>
                        <div className="textstyle22">Journey to Master the Dos and Don'ts</div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
           </div>
           </div>
  );
};

export default Activities;
