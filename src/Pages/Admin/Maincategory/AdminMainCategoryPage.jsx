import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../Components/AdminComponent/AdminSidebar'
import DataTable from 'datatables.net-dt'

import 'datatables.net-dt/css/dataTables.dataTables.min.css'

export default function AdminMainCategoryPage() {

    let [MaincategoryStateData, setMaincategoryStateData] = useState([])

    async function deleteRecord(id) {
        if (window.confirm("Are You Sure to Delete That Record:")) {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {

                method: "DELETE",
                headers: {
                    "context-type": "application/json"
                }

            })
            response = await response.json()
            setMaincategoryStateData(MaincategoryStateData.filter(x => x.id !== id))
        }

    }

    useEffect(() => {

        let time = (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {

                method: "GET",
                headers: {
                    "context-type": "application/json"
                }

            })
            response = await response.json()
            setMaincategoryStateData(response)

            let time = setTimeout(() => {
               new DataTable('#myTable')
            }, 500)
            return time
        })()

        return () => clearTimeout(time)
    }, [])


    return (
        <>
            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Main Category
                            <Link to="/admin/maincategory/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link>
                        </h5>

                        <div className="table-responsive">
                            <table className='table table-bordered' id="myTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {MaincategoryStateData.map((item) => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={60} width={80} alt='' />
                                            </Link></td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary'> <i className='bi bi-pencil'></i></Link> </td>
                                            <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}> <i className='bi bi-trash'></i></button></td>
                                        </tr>

                                    })}
                                </tbody>

                            </table>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}
