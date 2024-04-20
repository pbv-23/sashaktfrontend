import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Playpage = () => {
  
  
  return (
    <div className="playbackgroundimage">
      <Link to="/mainpage" className="back-button">
        Back
      </Link>
      <div>
        <div className="container33 mt-5">
          <div className="row">
            <div className="col-lg-5 mb-3">
              <Link to="/gamehome">
                <div className="pl-card"onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div className="card-body">
                    <img src="jigsaw.jpg" className="image-card" alt="Video Thumbnail" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-5 mb-3">
              <Link to="/memory">
                <div className="pl-card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div className="card-body">
                    <img src="Memory.jpg" className="image-card" alt="Video Thumbnail" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container33 mt-5">
          <div className="row">
            <div className="col-lg-5 mb-3">
              <Link to="/mazehome">
                <div className="pl-card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div className="card-body">
                    <img src="maze.jpg" className="image-card" alt="Video Thumbnail" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-5 mb-3">
              <Link to="/candyhome">
                <div className="pl-card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div className="card-body">
                    <img src="Candy.jpg" className="image-card" alt="Video Thumbnail" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playpage;
