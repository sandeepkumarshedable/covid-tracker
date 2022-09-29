import React from "react";
import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
// // import Navbar from "./component/Navbar";
import Home from "./component/Home.js";
import CovidInfo from "./component/CovidInfo.js";
import Header from "./component/Navbar.js";
import Contact from "./component/Contact.js";
import Covid from "./component/Piechart/Covid";
import Download from "./Dchart.js"
import {Logout} from './Logout.js'
import {Protected} from "./Protected.js"

function App() {
if(localStorage.getItem("token")!==null)
{
  const isSignin = localStorage.getItem("token"); 
  console.log(isSignin)}
 let data =
 {
   "msg" : "User is not logged in"
 }
  return (
    <div className="App">
      Hello
      <BrowserRouter>
        <Header />
      
      
        
        <Routes>
        {/* <Route path="/" element={isSignin ? <Covid/> : <Navigate to="/signin" state={data}/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/download" element={<Download/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/covidinfo" element={<CovidInfo />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/logout" element={isSignin ? <Logout/>:" "}/> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/covid" element={<Protected component= {<Covid/>}/>}/>
          <Route path="/download" element={ <Protected component= {<Download/>}/>}/>
         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
