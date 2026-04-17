import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import AboutUs from '../Components/AboutUs'
import Feature from '../Components/Feature'
import Testimonials from '../Components/Testimonials'
import Faq from '../Components/Faq'

export default function AboutPage() {
  return (
    <>
    <Breadcrum title="About Us" description="We are dedicated to delivering quality products at great prices, ensuring a seamless shopping experience with reliable service, fast delivery, and customer satisfaction at the heart of everything we do."/>
    <AboutUs/>
    <Feature/>
    <Testimonials/>
    <Faq/>
    </>
  )
}
