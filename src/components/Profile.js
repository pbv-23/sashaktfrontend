import { Link } from "react-router-dom";

const Profile = () => {
    const uniqueName = sessionStorage.getItem('uniqueName');
    return (
        <div className="profile22">
            <img
            className="emoji-img222"
            src={sessionStorage.getItem('emoji')}
        />
        <h2 className="tq">{` ${uniqueName}!`}</h2>
        <Link to='/emoji'>
            <button className="probut">"Emoji Glow-Up"</button>
        </Link>
        </div>
      );
}
 
export default Profile;