import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Appp from './DND/components/Appp';
import About from './DND/components/About';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={isLoggedIn == "true" ? <Appp /> : <Login />}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Managed" element={<Appp/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
