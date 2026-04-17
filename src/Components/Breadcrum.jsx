import React from 'react'
import { Link } from 'react-router-dom'
export default function Breadcrum({ title, description }) {
    return (
        <>
            <div className="page-title">
                
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title">{title}</h1>
                                <p className="mb-0">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li className="current">{title}</li>
                        </ol>
                    </div>
                </nav>
            </div>
        </>
    )
}
