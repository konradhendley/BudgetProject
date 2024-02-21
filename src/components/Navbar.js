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
              <Link to="/login"><button>Login</button></Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/signup"><button>Signup</button></Link>
            </li>
          )}
          {token && (
            <>
              <li>
                <Link to="/myAccount"><button>Account</button></Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;