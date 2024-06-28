import "./Signup.css"
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";




export default function Signup(){

  
    
   
    
    return(
        <>
        <div className="signup">
            <img src={Logo} alt="" />
            <div className="signup-l1">Sign up to see photos and videos from your friends.</div>
            <button className="log-in-with-facebook">Log in with facebook</button>
            <p>--------OR--------</p>
            
                <input type="text" name="email" placeholder="Mobile Number Or Email" />
                <input type="text" name="name"   placeholder="Full Name" />
                <input type="text"  name="userName" placeholder="Username"/>
                <input type="text" name="password"  placeholder="Password" />
                <div className="terms-policy">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>
                <input type="submit" value="Sign-up" className="signup-btn"  />
            
            
        </div>
        <div className="signup-login">
        Have an account? 
        <Link to="/signin">Login </Link>
        </div>

        </>
    )
}