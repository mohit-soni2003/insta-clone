import './App.css'
import React, { createContext , useState} from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './components/CreatePost'
import LoginContext from "./context/LoginContext"

function App() {
  const [userLogin, setuserLogin] = useState(false)
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <LoginContext.Provider value={{setuserLogin}} >

            <Navbar login={userLogin} />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/Profile" element={<Profile />}></Route>
              <Route path="/createpost" element={<CreatePost />}></Route>
            </Routes>
            <ToastContainer theme='light'></ToastContainer>
          </LoginContext.Provider>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
