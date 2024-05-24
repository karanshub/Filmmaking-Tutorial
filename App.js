import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Navhome from "./components/navbar/Navhome";

import { auth } from "./firebase";

import "./App.css";
import Videolinks from "./components/navbar/Videolinks";
import Tutorial from "./components/navbar/Tutorial";
import About from "./components/navbar/About";
import Contact from "./components/navbar/Contact";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
         
          <Route path="/navbar" element={<Navbar/>} >
          <Route path="/navbar/home" element={<Navhome/>}  />
          <Route path="/navbar/links" element={<Videolinks/>} />
          <Route path="/navbar/tutorial" element={<Tutorial/>}  />
          <Route path="/navbar/about" element={<About/>} />
          <Route path="/navbar/contact" element={<Contact/>}  />
           {/* Other routes go here */}
           </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
