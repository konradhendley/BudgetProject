// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    console.log('Rendering Home');
  return (
    <div className = "content-container">
      <Header />
      <div className='home-container'>
        <div className='centered-card'>
            <div className="card">
                <h2>LEARN</h2>
                <p>Gain knowledge on you journey to financial literacy</p>
                <br/>
                <h2>PLAN</h2>
                <p>Create budgets to help you gain finaical independence</p>
                <br/>
                <h2>GROW</h2>
                <p>Expand your net worth by saving and investing</p>
                <br/>
                <div className = 'button-container'>
            <Link to="/login">
            <button>Login</button>
            </Link>
            <Link to="/signup">
            <button>Signup</button>
            </Link>
        </div>
            </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;