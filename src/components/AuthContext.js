import React, { createContext, useContext, useState } from 'react';

// Create a context for managing authentication state
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your app and provide authentication state and functions
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Function to set the token when user logs in
  const login = (accessToken) => {
    setToken(accessToken);
  };

  // Function to clear the token when user logs out
  const logout = () => {
    setToken(null);
  };

  // Value to be provided by the context
  const authContextValue = {
    token,
    login,
    logout,
  };

  // Provide the authentication context to the entire app
  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
