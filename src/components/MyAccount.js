import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import Footer from './Footer';

const MyAccount = () => {
    const { token } = useAuth();
  
    // Extract username from the user object
    const decodedToken = jwtDecode(token);
    const username = decodedToken.user.firstName
  
    return (
      <div>
        <div className="content-container">
          <div className="mypage-container">
            <h2>Welcome, {username}!</h2>
          </div>
          <div>
            <Link to = "/budgets"><p>Create a budget</p></Link>
          </div>
        </div>
        <Footer />
      </div>

    );
  };
  
  export default MyAccount;