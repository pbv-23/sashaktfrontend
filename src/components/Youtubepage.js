import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Youtubepage = () => {
  return (
    <div className="ytbackground-image">
        <Link to="/mainpage" className="back-button">
        Back
      </Link>
      <div>
            <div className="container33 mt-5">
                <div className="row">
                    <div className="col-lg-4 mb-3">
                    <Link to="/yt/N14_XNH8Mqs">
                    <div className="card33" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body33">
                            <img  src="vi.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                
                <div className="col-lg-4 mb-3">
                    <Link to="/yt/jg1O9hjtj58">
                    <div className="card33" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body33">
                            <img  src="rig.jpg" className="img-fluid" alt="Video Thumbnail" />
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/yt/ZtKPr1tpsQ0">
                    <div className="card33" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body33">
                            <img  src="righ.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            <div className="container33 mt-5">
            <div className="row">
            <div className="col-lg-4 mb-3">
                    <Link to="/yt/gS9xOczDEZY">
                    <div className="card33" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body33">
                            <img  src="right.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/yt/_cp1aiGFVHc">
                    <div className="card33" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body33">
                            <img  src="c-right.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-3">
                    <Link to="/yt/QGLnnk46UQ0">
                    <div className="card33" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div className="card-body33">
                            <img  src="child.jpg" className="img-fluid" alt="Video Thumbnail"/>
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

export default Youtubepage;
