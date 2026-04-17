import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
            <Breadcrum title="404 - Page Not Found" description="Oops! The page you're looking for doesn't exist or may have been moved. Let’s get you back on track—return to the homepage or explore our latest products." />

            <section id="error-404" className="error-404 section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">

                            <div className="error-number" data-aos="zoom-in" data-aos-delay="200">
                                404
                            </div>

                            <h1 className="error-title" data-aos="fade-up" data-aos-delay="300">
                                Page Not Found
                            </h1>

                            <p className="error-description" data-aos="fade-up" data-aos-delay="400">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>

                            <div className="error-actions" data-aos="fade-up" data-aos-delay="500">
                                <Link to="/" className="btn-primary">
                                    <i className="bi bi-house"></i>
                                    Back to Home
                                </Link>

                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">

                            <div className="helpful-links" data-aos="fade-up" data-aos-delay="600">
                                <h3>You might be looking for:</h3>
                                <div className="links-grid">
                                    <Link to="/aboutus" className="link-item">
                                        <i className="bi bi-info-circle"></i>
                                        <span>About Us</span>
                                    </Link>
                                    <Link to="/contactus" className="link-item">
                                        <i className="bi bi-telephone"></i>
                                        <span>Contact</span>
                                    </Link>
                                    <Link to="/feature" className="link-item">
                                        <i className="bi bi-grid-3x3-gap"></i>
                                        <span>Features</span>
                                    </Link>
                                    <Link to="shop" className="link-item">
                                        <i className="bi bi-journal-text"></i>
                                        <span>Shop</span>
                                    </Link>
                                    <Link to="/faq" className="link-item">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Faq</span>
                                    </Link>
                                    <Link to="/privacy-policy" className="link-item">
                                        <i className="bi bi-shield-check"></i>
                                        <span>Privacy Policy</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>

    )
}
