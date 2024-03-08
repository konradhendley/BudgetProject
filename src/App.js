import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components//Home';
import LoginForm from './components//LoginForm';
import SignupForm from './components/SignupForm';
import MyAccount from './components//MyAccount';
import MyInfo from './components/MyInfo';
import UpdateUser from './components/UpdateUser';
import Navbar from './components//Navbar';
import { AuthProvider } from './components/AuthContext';


const App = () =>{
  return (
    <Router>
       <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/myInfo" element={<MyInfo />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/logout" element={<Home />}  />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
