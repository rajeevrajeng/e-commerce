import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
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
    <header id="header" className="header fixed-top">

      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">

            <i className="ms-2 bi bi-geo-alt d-flex align-items-center">
              <Link href={`${settingData.map1}`} target='_blank'>{settingData.address}</Link>
            </i>

            <i className="ms-2 bi bi-envelope d-flex align-items-center">
              <Link href={`mailto:${settingData.email}`} target='_blank'>{settingData.email}</Link>
            </i>

            <i className="ms-2 bi bi-telephone d-flex align-items-center">
              <Link href={`tel:${settingData.phone}`} target='_blank'>{settingData.phone}</Link>
            </i>

            <i className="ms-2 bi bi-whatsapp d-flex align-items-center">
              <Link href={`https://wa.me/${settingData.whatsapp}`} target='_blank'>{settingData.whatsapp}</Link>
            </i>

          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <Link to={settingData.facebook} target='_blank' className="facebook"><i className="ms-2 bi bi-facebook"></i></Link>
            <Link to={settingData.twitter} target='_blank' className="twitter"><i className="ms-2 bi bi-twitter-x"></i></Link>
            <Link to={settingData.instagram} target='_blank' className="instagram"><i className="ms-2 bi bi-instagram"></i></Link>
            <Link to={settingData.linkedin} target='_blank' className="linkedin"><i className="ms-2 bi bi-linkedin"></i></Link>
            <Link to={settingData.youtube} target='_blank' className="linkedin"><i className="ms-2 bi bi-youtube"></i></Link>
          </div>
        </div>
      </div>
      {/* <!-- End Top Bar --> */}

      <div className="branding d-flex align-items-cente">

        <div className="container position-relative d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            <h1 className="sitename">{settingData.siteName}</h1>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="about">About</NavLink></li>
              <li><NavLink to="departments.html">Departments</NavLink></li>
              <li><NavLink to="services.html">Services</NavLink></li>
              <li><NavLink to="doctors.html">Doctors</NavLink></li>
              <li className="dropdown"><Link to="#"><span>More Pages</span> <i className="ms-2 bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><NavLink to="department-details.html">Department Details</NavLink></li>
                  <li><NavLink to="service-details.html">Service Details</NavLink></li>
                  <li><NavLink to="appointment.html">Appointment</NavLink></li>
                  <li><NavLink to="testimonials.html">Testimonials</NavLink></li>
                  <li><NavLink to="faq.html">Frequently Asked Questions</NavLink></li>
                  <li><NavLink to="gallery.html">Gallery</NavLink></li>
                  <li><NavLink to="terms.html">Terms</NavLink></li>
                  <li><NavLink to="privacy.html">Privacy</NavLink></li>
                  <li><NavLink to="404.html">404</NavLink></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className="ms-2 bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><NavLink to="#">Dropdown 1</NavLink></li>
                  <li className="dropdown"><NavLink to="#"><span>Deep Dropdown</span> <i className="ms-2 bi bi-chevron-down toggle-dropdown"></i></NavLink>
                    <ul>
                      <li><NavLink to="#">Deep Dropdown 1</NavLink></li>
                      <li><NavLink to="#">Deep Dropdown 2</NavLink></li>
                      <li><NavLink to="#">Deep Dropdown 3</NavLink></li>
                      <li><NavLink to="#">Deep Dropdown 4</NavLink></li>
                      <li><NavLink to="#">Deep Dropdown 5</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="#">Dropdown 2</NavLink></li>
                  <li><NavLink to="#">Dropdown 3</NavLink></li>
                  <li><NavLink to="#">Dropdown 4</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="contact.html">Contact</NavLink></li>
            </ul>
            <i className="ms-2 mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

        </div>

      </div>

    </header>
  )
}
