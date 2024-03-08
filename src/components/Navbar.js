// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function to clear authentication token
    logout();
    // Navigate to the logout route
    navigate('/');

  };

  return (
    <nav>
      <div>
      <Link to="/"><h1>Folio</h1></Link>
      </div>
      <div>
        <ul>
          {!token && (
            <li>
              <Link to="/login"><button className="navbar-button">Login</button></Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/signup"><button className="navbar-button">Signup</button></Link>
            </li>
          )}
          { token && (
            <div className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
            </button>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <li><Link to="/myAccount" className="dropdown-item">My Account</Link></li>
              <li><Link to="/myInfo" className="dropdown-item">My Info</Link></li>
              <li><a href="/" className="dropdown-item" onClick={handleLogout}> Log Out</a></li>
            </ul>
          </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;