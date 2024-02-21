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
    <div className = 'content-container'>
      <div  className = "home-container">
        <div className="login-card">
        <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <br />
            <br />
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <br />
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
