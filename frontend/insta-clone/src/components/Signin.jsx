import React from 'react'
import "./Signin.css"
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";



export default function Signin() {
  return (<>
    <div className='signin' >
      <img src={Logo} alt="" />
      <input type="text" name='username' placeholder='Phone number , username or email'/>
      <input type="text" name='password' placeholder='Password' />
      <button className='login-btn'>Log in</button>
      <div className="or">-------OR---------</div>
      <a href="">Log in with Facebook</a>
      <div className="forgot-pass"><Link to="">Forgot Password</Link></div>
    </div>

    <div className="login-signup">
      Don't have an account? <Link to="/signup">Sign up</Link>
    </div>
  </>
  )
}
