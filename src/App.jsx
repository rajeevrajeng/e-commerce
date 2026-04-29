import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import ContactusPage from './Pages/ContactusPage'
import ErrorPage from './Pages/ErrorPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndCondition from './Pages/TermsAndCondition'
import TestimonialPage from './Pages/TestimonialPage'
import AdminHomePage from './Pages/Admin/AdminHomePage'
import AdminMainCategoryPage from './Pages/Admin/Maincategory/AdminMainCategoryPage'
import AdminCreateMainCategoryPage from './Pages/Admin/Maincategory/AdminCreateMainCategoryPage'
import AdminUpdateMainCategoryPage from './Pages/Admin/Maincategory/AdminUpdateMainCategoryPage'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/feature' element={<FeaturePage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/contactus' element={<ContactusPage />} />
          <Route path='/testimonial' element={<TestimonialPage />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsAndCondition />} />

          {/* Admin Routes */}

          <Route path='/admin' element={<AdminHomePage />} />
          <Route path='/admin/maincategory' element={<AdminMainCategoryPage />} />
          <Route path='/admin/maincategory/create' element={<AdminCreateMainCategoryPage />} />
          <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMainCategoryPage/>}/>


          <Route path='/*' element={<ErrorPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}
