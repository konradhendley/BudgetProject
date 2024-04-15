// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import image1 from '../assets/homeImage1.jpg'
import image2 from '../assets/homeImage2.jpg'
import image3 from '../assets/homeImage3.jpg'
import { useAuth } from './AuthContext';

const Home = () => {

  const { token } = useAuth();

  return (
    <div>
      <div className='home-page'>
        <div className="left-section">
          <div className= 'home-card'>
          <h2>Take Control of Your Finances</h2>
          <p>Begin you journey to unlocking financial freedom</p>
          {!token &&(
          <div className = 'button-container'>
              <Link to="/login">
              <button>Login</button>
              </Link>
              <Link to="/signup">
              <button>Signup</button>
              </Link>
              </div>
            )}
          </div>
        </div>
        <div className="right-section">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={image1} alt="First slide"/>
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Learn</h3>
                        <p>Empower yourself with knowledge of how your money works.</p>
                    </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={image2} alt="Second slide"/>
                  <div class="carousel-caption d-none d-md-block">
                  <h3>Plan</h3>
                      <p>Chart your path to financial independence.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={image3} alt="Third slide"/>
                  <div class="carousel-caption d-none d-md-block">
                  <h3>Grow</h3>
                      <p>Elevate your wealth through saving and investing.</p>
                  </div>
                </div>
              </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;