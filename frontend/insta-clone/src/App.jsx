import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <div className="App">
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/signin" element={<Signin/>}></Route>
      <Route path = "/signup" element={<Signup/>}></Route>
      <Route path = "/Profile" element={<Profile/>}></Route>
    </Routes>
    <ToastContainer theme='light'></ToastContainer>
   </div>
   </BrowserRouter>
   </>
  )
}

export default App
