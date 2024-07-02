import Logo from "../img/Logo.png";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <img src={Logo} alt="" />
            <ul className="nav-menu">

            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/Signin">Signin</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/createpost">Create Post</Link></li>
            </ul>
            
        </div>
        </>
    )
}