import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Appp from './DND/components/Appp';
import First from './Pages/First'

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={isLoggedIn === "true" ? <Appp /> : <First />}></Route>
          <Route path="/login" element={ <Login />}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Managed" element={<Appp/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
