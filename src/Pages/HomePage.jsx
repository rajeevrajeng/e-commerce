import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AboutUs from '../Components/AboutUs'
import Feature from '../Components/Feature'
import CustomerSupport from '../Components/CustomerSupport'
import Products from '../Components/Products'
import Testimonials from '../Components/Testimonials'

export default function HomePage() {
  return (
    <>
      <section id="hero" className="hero section">

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row align-items-center d-flex justify-content-between">
            <div className="col-lg-5">
              <div className="hero-content">
                <h1 data-aos="fade-right" data-aos-delay="300">
                  Discover <span className="highlight">Top-Quality</span> Products at Great Prices With Fast, Secure Delivery.</h1>

                <p className="hero-description" data-aos="fade-right" data-aos-delay="400">
                  Experience seamless shopping with a wide selection of quality products at great prices. Enjoy secure checkout, fast delivery, and reliable customer support. Discover new arrivals, trending items, and exclusive deals—all designed to make your shopping simple, convenient, and enjoyable every day.
                </p>

                <div className="hero-stats mb-4" data-aos="fade-right" data-aos-delay="500">
                  <div className="stat-item">
                    <h3><span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="2"
                      className="purecounter"><i className='bi bi-check'></i></span></h3>
                    <p>100% Genuine Products</p>
                  </div>
                  <div className="stat-item">
                    <h3><span data-purecounter-start="0" data-purecounter-end="5000" data-purecounter-duration="2"
                      className="purecounter"><i className='bi bi-headphones'></i></span></h3>
                    <p>24/7 Customer Support</p>
                  </div>
                  <div className="stat-item">
                    <h3><span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2"
                      className="purecounter"><i className='bi bi-truck'></i></span></h3>
                    <p>Fast Delivery</p>
                  </div>
                </div>

                <div className="hero-actions" data-aos="fade-right" data-aos-delay="600">
                  <Link to="/shop" className="btn btn-primary btn-sm">Shop Now</Link>
                  <Link to="/feature" className="btn btn-primary btn-sm">Features</Link>
                  <Link to="/contactus" className="btn btn-primary btn-sm">Contact Us</Link>
                </div>
               
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero-visual" data-aos="fade-left" data-aos-delay="400">
                <div className="main-image">
                  <img src="assets/img/shop/hero-03.jpg" alt="Modern Healthcare Facility" className="img-fluid" />
                  <div className="floating-card appointment-card">
                    <div className="card-icon">
                      <i className="bi bi-calendar-check"></i>
                    </div>
                    <div className="card-content">
                      <h6>Sale in Live</h6>
                      <p>Grab Upto 90% Discount</p>
                      <small>On Latest Product</small>
                    </div>
                  </div>
                  <div className="floating-card rating-card">
                    <div className="card-content">
                      <div className="rating-stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <h6>4.9/5</h6>
                      <small>1,234 Reviews</small>
                    </div>
                  </div>
                </div>
                <div className="background-elements">
                  <div className="element element-1"></div>
                  <div className="element element-2"></div>
                  <div className="element element-3"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <AboutUs />
      <Feature />
      <CustomerSupport />
      <Products />
      <Testimonials />
    </>
  )
}
