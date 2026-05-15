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

//MainCategory
import AdminMainCategoryPage from './Pages/Admin/Maincategory/AdminMainCategoryPage'
import AdminCreateMainCategoryPage from './Pages/Admin/Maincategory/AdminCreateMainCategoryPage'
import AdminUpdateMainCategoryPage from './Pages/Admin/Maincategory/AdminUpdateMainCategoryPage'

//SubCategory
import AdminSubCategoryPage from './Pages/Admin/Subcategory/AdminSubCategoryPage'
import AdminCreateSubCategoryPage from './Pages/Admin/Subcategory/AdminCreateSubCategoryPage'
import AdminUpdateSubCategoryPage from './Pages/Admin/Subcategory/AdminUpdateSubCategoryPage'

//Brand
import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminCreateBrandPage from './Pages/Admin/Brand/AdminCreateBrandPage'
import AdminUpdateBrandPage from './Pages/Admin/Brand/AdminUpdateBrandPage'

//Feature
import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminCreateFeaturePage from './Pages/Admin/Feature/AdminCreateFeaturePage'
import AdminUpdateFeaturePage from './Pages/Admin/Feature/AdminUpdateFeaturePage'

//FAQ
import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage'
import AdminCreateFaqPage from './Pages/Admin/Faq/AdminCreateFaqPage'
import AdminUpdateFaqPage from './Pages/Admin/Faq/AdminUpdateFaqPage'


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
          <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMainCategoryPage />} />

          <Route path='/admin/subcategory' element={<AdminSubCategoryPage />} />
          <Route path='/admin/subcategory/create' element={<AdminCreateSubCategoryPage />} />
          <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubCategoryPage />} />

          <Route path='/admin/brand' element={<AdminBrandPage />} />
          <Route path='/admin/brand/create' element={<AdminCreateBrandPage />} />
          <Route path='/admin/brand/update/:id' element={<AdminUpdateBrandPage />} />

{/*Feature */}
          <Route path='/admin/feature' element={<AdminFeaturePage />} />
          <Route path='/admin/feature/create' element={<AdminCreateFeaturePage />} />
          <Route path='/admin/feature/update/:id' element={<AdminUpdateFeaturePage />} />

{/* FAQ */}
          <Route path='/admin/faq' element={<AdminFaqPage />} />
          <Route path='/admin/faq/create' element={<AdminCreateFaqPage />} />
          <Route path='/admin/faq/update/:id' element={<AdminUpdateFaqPage />} />

          <Route path='/*' element={<ErrorPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}
