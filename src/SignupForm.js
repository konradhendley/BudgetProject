import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
  
      console.log(response.data); // Log the response data
      // Optionally, you can redirect the user or perform other actions after a successful signup
    } catch (error) {
      console.error('Error during POST request:', error);
      // Handle error: you can show an error message to the user or perform other actions
    }
  };

  return (
    <div  className = "home-container">
      <div className="card">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <br />
          <br />
          <div className = 'button-container'>
          <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
