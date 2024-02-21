// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/homeImage1.jpg'
import image2 from '../assets/homeImage2.jpg'
import image3 from '../assets/homeImage3.jpg'

const Home = () => {
  return (
    <div className = "content-container">
      <div className='home-page'>
      <div className="left-section">
        <div className= 'home-card'>
        <h2>Take Control of Your Finances</h2>
        <p>Begin you journey to unlocking financial freedom</p>
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
      <div className="right-section">
      <Carousel className='carousel-container'>
      <Carousel.Item>
      <img src={image1} alt="First slide" />
          <h3>Learn</h3>
          <p>Empower yourself with financial knowledge.</p>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="Second slide" />
          <h3>Plan</h3>
          <p>Chart your path to financial independence.</p>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="Third slide" />
          <h3>Grow</h3>
          <p>Elevate your wealth through saving and investing.</p>
      </Carousel.Item>
    </Carousel>
      </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;