import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Navbar from './Navbar';


const App = () =>{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
