// UpdateUser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Footer from './Footer';

const UpdateUser = () => {
  const { token } = useAuth();

  // Extract user info from the token
  const decodedToken = jwtDecode(token);
  const { firstName: defaultFirstName, lastName: defaultLastName, email: defaultEmail } = decodedToken.user;

  // Set initial state with default values
  const [formData, setFormData] = useState({
    firstName: defaultFirstName,
    lastName: defaultLastName,
    email: defaultEmail,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.patch('http://127.0.0.1:8000/updateUser', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Redirect to "myAccount"
      navigate('/myInfo');

    } catch (error) {
      console.error('Error during PATCH request:', error);
      // Handle error: you can show an error message to the user or perform other actions
    }
  };

  return (
    <div>
      <div className='content-container'>
        <div className='centered-card'>
          <div className="info-card">
            <form onSubmit={handleSubmit}>
              <h6>First Name</h6>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              <br />
              <h6>Last Name</h6>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              <br />
              <h6>Email</h6>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
              <br />
              <div className='button-container'>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default UpdateUser;
