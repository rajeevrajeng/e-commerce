import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item d-flex gap-2 list-group-item-action active" aria-current="true"><i className='fs-5 bi bi-house-check'></i><span>Home</span>
                </Link>
                <Link to="/admin/maincategory" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-bookmark-plus'></i><span>Main Category</span>
                </Link>

                <Link to="/admin/subcategory" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-bookmark-plus'></i><span>Subcategory</span>
                </Link>

                <Link to="/admin/brand" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-shield-check'></i><span>Brand</span>
                </Link>
                <Link to="/admin/product" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-tags'></i><span>Product</span>
                </Link>
                <Link to="/admin/feature" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-view-list'></i><span>Feature</span>
                </Link>
                <Link to="/admin/fqa" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-question-circle'></i><span>Faq</span>
                </Link>

                <Link to="/admin/setting" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-gear'></i><span>Setting</span>
                </Link>

                <Link to="/admin/checkout" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-bag-check'></i><span>Checkout</span>
                </Link>
                <Link to="/admin/contactus" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-person-rolodex'></i><span>Contact Us</span>
                </Link>
                <Link to="/admin/user" className="list-group-item d-flex gap-2 list-group-item-action" aria-current="true"><i className='fs-5 bi bi-person'></i><span>User</span>
                </Link>

            </div>
        </>
    )
}

