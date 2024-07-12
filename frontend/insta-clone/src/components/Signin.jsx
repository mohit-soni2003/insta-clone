import { useEffect, useState , useContext, } from "react";
import "./Signin.css"
import Logo from "../img/Logo.png";
import { Link , useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import  LoginContext  from "../context/LoginContext";


export default function Signin() {

  const {setuserLogin} = useContext(LoginContext)

  const navigate = useNavigate()


//State variable of signin -------- ------ ------ --------- ------

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  let handleEmailChange =(event)=>{
    console.log(event.target);
    setemail(event.target.value)
  };
  let handlePasswordChange =(event)=>{
    console.log(event.target);
    setpassword(event.target.value)
  };

// Post data function ------ -------- ------- --------- -------- -

const postData = ()=>{

  fetch("http://localhost:8080/signin",
      {
          method : "post",
          headers:{
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            email:email,
            password:password
          })
      }
  ).then(res=>res.json())
  .then(data =>{
    if(data.error){
        notifyB(data.error)
    }
    else{
          notifyA(data.message)
          console.log(data.message)
          localStorage.setItem("jwt",data)
          setuserLogin(true)
          navigate("/")
        }
        
      console.log(data)})
  
//Toast Function --------- ------ --------- -------

const notifyA = (msg)=>toast.success(msg)
const notifyB = (msg)=>toast.error(msg)
}

  return (<>
    <div className='signin' >
      <img src={Logo} alt="" />
      <input type="text" name='email' onChange={handleEmailChange}  placeholder='Phone number , username or email'/>
      <input type="text" name='password' onChange={handlePasswordChange} placeholder='Password' />
      <button className='login-btn' onClick={postData}>Log in</button>
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
