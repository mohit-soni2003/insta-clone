import "./Signup.css"
import Logo from "../img/Logo.png";
import { Link , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Signup(){

    const navigate = useNavigate()

    // all about field state change ----- ----- ------- ------

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")

    let handleNameChange =(event)=>{
        console.log(event.target);
        setname(event.target.value)
    };
    let handleUserNameChange =(event)=>{
        console.log(event.target);
        setuserName(event.target.value)
    };
    let handleEmailChange =(event)=>{
        console.log(event.target);
        setemail(event.target.value)
    };
    let handlePasswordChange =(event)=>{
        console.log(event.target);
        setpassword(event.target.value)
    };

    //All about post data to the server ------- -------- ---------- 

    const postData = ()=>{

        fetch("http://localhost:8080/signup",
            {
                method : "post",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name:name,
                    userName:userName,
                    password:password,
                    email:email
                })
            }
        ).then(res=>res.json())
        .then(data =>{
            if(data.message){
                notifyA(data.message)
                navigate("/signin")
            }
            if(data.error){
                notifyB(data.error)
            }
            console.log(data)})
        
    //Toast Function --------- ------ --------- -------

    const notifyA = (msg)=>toast.success(msg)
    const notifyB = (msg)=>toast.error(msg)
    }


    return(
        <>
        <div className="signup">
            <img src={Logo} alt="" />
            <div className="signup-l1">Sign up to see photos and videos from your friends.</div>
            <button className="log-in-with-facebook">Log in with facebook</button>
            <p>--------OR--------</p>
            
                <input type="text" name="email" value={email} onChange={handleEmailChange} placeholder="Mobile Number Or Email" />
                <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Full Name" />
                <input type="text"  name="userName" value={userName} onChange={handleUserNameChange} placeholder="Username"/>
                <input type="text" name="password"  value={password} onChange={handlePasswordChange} placeholder="Password" />
                <div className="terms-policy">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>
                <input type="submit" value="Sign-up" onClick={postData} className="signup-btn"  />
            
            
        </div>
        <div className="signup-login">
        Have an account? 
        <Link to="/signin">Login </Link>
        </div>

        </>
    )
}