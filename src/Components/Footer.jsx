import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="footer-16 footer position-relative bg-dark">
      <div className="container">
        <div className="footer-main" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-start">

            <div className="col-lg-5">
              <div className="brand-section">
                <a href="index.html" className="logo d-flex align-items-center mb-4">
                  <span className="text-light sitename">Clinic</span>
                </a>
                <p className="brand-description text-light">Crafting exceptional digital experiences through thoughtful design and
                  innovative solutions that elevate your brand presence.</p>

                <div className="contact-info mt-5">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt text-light"></i>
                    <span className="text-light">123 Creative Boulevard, Design District, NY 10012</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone text-light"></i>
                    <span className="text-light">+1 (555) 987-6543</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope text-light"></i>
                    <span className="text-light">hello@designstudio.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="footer-nav-wrapper">
                <div className="row">

                  <div className="col-6 col-lg-3">
                    <div className="nav-column">
                      <h6 className='text-light'>Studio</h6>
                      <nav className="footer-nav">
                        <a href="#!" className='text-light'>Our Story</a>
                        <a href="#!" className='text-light'>Design Process</a>
                        <a href="#!" className='text-light'>Portfolio</a>
                        <a href="#!" className='text-light'>Case Studies</a>
                        <a href="#!" className='text-light'>Awards</a>
                      </nav>
                    </div>
                  </div>

                  <div className="col-6 col-lg-3">
                    <div className="nav-column">
                      <h6 className='text-light'>Services</h6>
                      <nav className="footer-nav">
                        <a href="#!" className='text-light'>Brand Identity</a>
                        <a href="#!" className='text-light'>Web Design</a>
                        <a href="#!" className='text-light'>Mobile Apps</a>
                        <a href="#!" className='text-light'>Digital Strategy</a>
                        <a href="#!" className='text-light'>Consultation</a>
                      </nav>
                    </div>
                  </div>

                  <div className="col-6 col-lg-3">
                    <div className="nav-column">
                      <h6 className='text-light'>Resources</h6>
                      <nav className="footer-nav">
                        <a href="#!" className='text-light'>Design Blog</a>
                        <a href="#!" className='text-light'>Style Guide</a>
                        <a href="#!" className='text-light'>Free Assets</a>
                        <a href="#!" className='text-light'>Tutorials</a>
                        <a href="#!" className='text-light'>Inspiration</a>
                      </nav>
                    </div>
                  </div>

                  <div className="col-6 col-lg-3">
                    <div className="nav-column">
                      <h6 className='text-light'>Connect</h6>
                      <nav className="footer-nav">
                        <a href="#!" className='text-light'>Start Project</a>
                        <a href="#!" className='text-light'>Schedule Call</a>
                        <a href="#!" className='text-light'>Join Newsletter</a>
                        <a href="#!" className='text-light'>Follow Updates</a>
                        <a href="#!" className='text-light'>Partnership</a>
                      </nav>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content" data-aos="fade-up" data-aos-delay="300">
            <div className="row align-items-center">

              <div className="col-lg-6">
                <div className="copyright">
                  <p className='text-light'>© <span className="text-light sitename">Clinic</span>. All rights reserved.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="legal-links">
                  <a href="#!" className='text-light'>Privacy Policy</a>
                  <a href="#!" className='text-light'>Terms of Service</a>
                  <a href="#!" className='text-light'>Cookie Policy</a>
                  <div className="credits text-light">

                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>. Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>


  )
}
