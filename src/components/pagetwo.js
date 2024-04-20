import { Link } from "react-router-dom";

const Pagetwo = () => {
    return ( 
        <section className="pagetwo">
            <h1 className="ppara">Hey, quick question—do you even have an account?</h1>
            <div>
                <Link to='/login'>
                    <button className="pbutton">LOG-IN</button>
                </Link>
            </div>
            <h1 className="ppara">Or are you, like, on the brink of starting this epic journey to create one? </h1>
            <h1 className="ppara">It's, like, the absolute coolest thing ever, no cap! 🌈🚀</h1>
            <div>
                <Link to='/signins'>
                    <button className="pbutton">SIGN-UP</button>
                </Link> 
            </div>
        </section>
     );
}
 
export default Pagetwo;
