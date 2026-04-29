import React from 'react'
import AdminSidebar from '../../Components/AdminComponent/AdminSidebar'
import Breadcrum from '../../Components/Breadcrum'

export default function AdminHomePage() {
    return (
        <>


            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Your Profile Page</h5>
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Rajeev Kumar</td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>RajeevKumar</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>rajeevkumar@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>+91 9717273287</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>Rajeev Kumar</td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>Super Admin</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>



    )
}
