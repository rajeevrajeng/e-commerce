import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Footer() {
  let [settingData, SetSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    map1: import.meta.env.VITE_APP_MAP1,
    address: import.meta.env.VITE_APP_ADDRESS,
    email: import.meta.env.VITE_APP_EMAIL,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    facebook: import.meta.env.VITE_APP_FACEBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    instagram: import.meta.env.VITE_APP_INSTAGRAM,
    youtube: import.meta.env.VITE_APP_YOUTUBE
  })

  return (
    <footer id="footer" className="footer-16 footer position-relative bg-dark">
      <div className="container">
        <div className="footer-main" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-start">
            <div className="col-lg-4">
              <div className="brand-section">
                <Link to="index.html" className="logo d-flex align-items-center mb-4">
                  <span className="text-light sitename">{settingData.siteName}</span>
                </Link>
                <p className="text-light">Learn more about our mission, values, and commitment to quality—delivering trusted products, excellent service, and a seamless shopping experience you can rely on every day.</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="footer-nav-wrapper">
                <div className="row">

                  <div className="col-md-3 col-12">
                    <div className="nav-column">
                      <h6 className='text-light'>Quick Link</h6>
                      <nav className="footer-nav">
                        <Link to="/" className='text-light'>Home</Link>
                        <Link to="/aboutus" className='text-light'>About Us</Link>
                        <Link to="/shop" className='text-light'>Shop</Link>
                        <Link to="/feature" className='text-light'>Features</Link>
                        <Link to="/faq" className='text-light'>Faq</Link>
                      </nav>
                    </div>
                  </div>

                  <div className="col-md-3 col-12">
                    <div className="nav-column">
                      <h6 className='text-light'>Important Link</h6>
                      <nav className="footer-nav">
                        <Link to="/testimonial" className='text-light'>Testimonial</Link>
                        <Link to="/contactus" className='text-light'>Contact Us</Link>
                        <Link to="/privacypolicy" className='text-light'>Privacy Policy</Link>
                        <Link to="/terms" className='text-light'>Terms &amp; Condition</Link>
                      </nav>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="nav-column">
                      <h6 className='text-light'>Subscribe Our Newsletter Service</h6>
                      <p className='text-light my-3'>Subscribe to our newsletter to stay updated on the latest products, exclusive offers, and special discounts. Get early access to new arrivals, shopping tips, and curated deals delivered straight to your inbox—helping you save more and shop smarter every time.</p>
                      <div className="div">
                        <form>
                          <div className='btn-group w-100'>
                            <input type="email" name="email" className="form-control rounded-0 rounded-start" placeholder="Enter Your Email Address"/>
                            <button className='btn btn-dark border'>Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className='row'>
            <div className="contact-info d-flex justify-content-between gap-3">
              <div className='d-flex gap-3'>
                <div className="contact-item">
                  <Link to={`${settingData.map1}`} target='_blank' className='d-flex gap-2'><i className="bi bi-geo-alt text-light"></i>
                    <span className="text-light">{settingData.address}</span></Link>
                </div>
                <div className="contact-item">
                  <Link to={`mailto:${settingData.email}`} target='_blank' className='d-flex gap-2'>
                    <i className="bi bi-envelope text-light"></i>
                    <span className="text-light">{settingData.email}</span>
                  </Link>
                </div>
                <div className="contact-item">
                  <Link to={`tel:${settingData.phone}`} target='_blank' className='d-flex gap-2'>
                    <i className="bi bi-telephone text-light"></i>
                    <span className="text-light">{settingData.phone}</span>
                  </Link>
                </div>
                <div className="contact-item">
                  <Link to={`https://wa.me/${settingData.whatsapp}`} target='_blank' className='d-flex gap-2'>
                    <i className="bi bi-whatsapp text-light"></i>
                    <span className="text-light">{settingData.whatsapp}</span>
                  </Link>
                </div>
              </div>

              <div className="social-links d-flex gap-3 align-items-center">
                <Link to={settingData.facebook} target='_blank' className="text-light facebook"><i className="ms-2 bi bi-facebook"></i></Link>
                <Link to={settingData.twitter} target='_blank' className="text-light twitter"><i className="ms-2 bi bi-twitter-x"></i></Link>
                <Link to={settingData.instagram} target='_blank' className="text-light instagram"><i className="ms-2 bi bi-instagram"></i></Link>
                <Link to={settingData.linkedin} target='_blank' className="text-light linkedin"><i className="ms-2 bi bi-linkedin"></i></Link>
                <Link to={settingData.youtube} target='_blank' className="text-light linkedin"><i className="ms-2 bi bi-youtube"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content" data-aos="fade-up" data-aos-delay="300">
            <div className="row align-items-center">

              <div className="col-lg-4">
                <div className="copyright">
                  <p className='text-light'>&copy; <span className="text-light sitename">{settingData.siteName}</span>. All rights reserved.</p>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="legal-links">
                  <Link to="/privacypolicy" className='text-light'>Privacy Policy</Link>
                  <Link to="/terms" className='text-light'>Terms of Service</Link>        
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>


  )
}
