import React from 'react'
import Feature from '../Components/Feature'
import Breadcrum from '../Components/Breadcrum'


export default function FeaturePage() {
    return (
        <>
            <Breadcrum title="Our Features" description="Explore top features including easy navigation, secure payments, fast delivery, quality products, and responsive customer support—designed to provide a smooth, reliable, and enjoyable shopping experience." />
            <Feature />
            
        </>
    )
}
