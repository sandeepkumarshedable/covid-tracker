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




function App() {
  return (
    <div className="App">
      Hello
      <BrowserRouter>
        <Header />
      
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/download" element={<Download/>}/>
          <Route path="/covidinfo" element={<CovidInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
