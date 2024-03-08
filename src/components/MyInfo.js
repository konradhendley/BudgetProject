// MyInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import Footer from './Footer';

const MyInfo = () => {
    const { token } = useAuth();
  
    // Extract username from the user object
    const decodedToken = jwtDecode(token);
    const firstName = decodedToken.user.firstName
    const lastName = decodedToken.user.lastName
    const email = decodedToken.user.email

  return (
    <div className = "content-container">
      <div className='home-container'>
        <div className='centered-card'>
            <div className="info-card">
              <h6>First Name</h6>
                <p> {firstName} </p>
                <br/>
                <h6>Last Name</h6>
                <p> {lastName} </p>
                <br/>
                <h6>Email</h6>
                <p> {email} </p>
                <br/>
                <div className = 'button-container'>
                <Link to="/updateUser"> <button>Update</button> </Link>
                </div>
            </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default MyInfo;