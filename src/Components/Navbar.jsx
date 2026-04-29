import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  let [showMemu, setShowMenu] = useState(false)
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
    <header id="header" className={`header fixed-top  ${showMemu ? 'mobile-nav-active' : ''}`}>

      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center gap-3">

            <Link to={`${settingData.map1}`} target='_blank' className='d-flex gap-2 text-light align-items-center'>

              <i className="ms-2 bi bi-geo-alt"></i> <span className='d-none d-xl-block'>{settingData.address}</span></Link>

            <Link to={`mailto:${settingData.email}`} target='_blank' className='d-flex gap-2 text-light align-items-center'>
              <i className="ms-2 bi bi-envelope"></i>
              <span className='d-none d-xl-block'>{settingData.email}</span></Link>

            <Link to={`tel:${settingData.phone}`} target='_blank' className='d-flex gap-2 text-light align-items-center'>
              <i className="ms-2 bi bi-telephone"></i>
              <span className='d-none d-xl-block'>{settingData.phone}</span></Link>

            <Link to={`https://wa.me/${settingData.whatsapp}`} target='_blank' className='d-flex gap-2 text-light align-items-center'>
              <i className="ms-2 bi bi-whatsapp"></i>
              <span className='d-none d-xl-block'>{settingData.whatsapp}</span></Link>

          </div>
          <div className="social-links d-flex align-items-center">
            <Link to={settingData.facebook} target='_blank' className="text-light facebook"><i className="ms-2 bi bi-facebook"></i></Link>
            <Link to={settingData.twitter} target='_blank' className="text-light twitter"><i className="ms-2 bi bi-twitter-x"></i></Link>
            <Link to={settingData.instagram} target='_blank' className="text-light instagram"><i className="ms-2 bi bi-instagram"></i></Link>
            <Link to={settingData.linkedin} target='_blank' className="text-light linkedin"><i className="ms-2 bi bi-linkedin"></i></Link>
            <Link to={settingData.youtube} target='_blank' className="text-light linkedin"><i className="ms-2 bi bi-youtube"></i></Link>
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
              <li><NavLink to="/aboutus">About Us</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/feature">Feature</NavLink></li>
              <li><NavLink to="/faq">Fqa</NavLink></li>
              <li><NavLink to="/testimonial">Testimonial</NavLink></li>
              <li><NavLink to="/contactus">Contact Us</NavLink></li>
              <li><NavLink to="/admin">Admin</NavLink></li>

              <li className="dropdown"><Link to="#"><span>User Name</span> <i className="ms-2 bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link to="/profile?option=Profile">Profile</Link></li>
                  <li><Link to="/profile?option=Wishlist">Wishlist</Link></li>
                  <li><Link to="/profile?option=Orders">Orders</Link></li>
                  <li><Link to="/profile?option=Address">Address</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/checkout">Checkout</Link></li>
                  <li><button className='btn ms-2'>Logout</button></li>

                </ul>
              </li>

            </ul>
            <i className={`ms-2 mobile-nav-toggle d-xl-none bi ${showMemu ? 'bi-x' : 'bi-list'}`} onClick={() => setShowMenu(!showMemu)}></i>
          </nav>

        </div>

      </div>

    </header>
  )
}
