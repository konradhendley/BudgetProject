// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import Footer from './Footer';



const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', formData);
      const access_token = response.data.token;
      
      login(access_token);

  // Redirect to "myAccount"
  navigate('/myAccount');

    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='wrapper'>
      <div  className = "content-container">
        <div className="card">
        <h2>Login</h2>
          <form className='login-form' onSubmit={handleSubmit}>
            <label>
              <h6>Email:</h6>
              <input className = "input-field" type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br/>
            <label>
            <h6>Password:</h6>
              <input className = "input-field" type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <div className = 'button-container'>
            <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default LoginForm;
