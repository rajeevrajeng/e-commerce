import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import DataTable from 'datatables.net-dt'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'

import AdminSidebar from '../../../Components/AdminComponent/AdminSidebar'

import { getSubcategory, deleteSubcategory } from "../../../Redux/ActionCreators/SubCategoryActionCreators"

export default function AdminSubCategoryPage() {

    //let [SubcategoryStateData, setSubcategoryStateData] = useState([])

    let [data, setData] = useState([])

    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let dispatch = useDispatch()

    function deleteRecord(id) {
        if (window.confirm("Are You Sure to Delete That Record:")) {
            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcategory/${id}`, {

            //     method: "DELETE",
            //     headers: {
            //         "context-type": "application/json"
            //     }

            // })
            // response = await response.json()
            // setSubcategoryStateData(SubcategoryStateData.filter(x => x.id !== id))

            dispatch(deleteSubcategory({ id: id }))
            setData(data.filter(x => x.id !== id))

        } 

    }

    useEffect(() => {

        let time = (() => {
            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {

            //     method: "GET",
            //     headers: {
            //         "context-type": "application/json"
            //     }

            // })
            // response = await response.json()
            // setSubcategoryStateData(response)

            dispatch(getSubcategory())

            if (SubcategoryStateData.length) {
                setData(SubcategoryStateData)
            }
            let time = setTimeout(() => {
                new DataTable('#myTable')
            }, 500)
            return time
        })()

        return () => clearTimeout(time)
    }, [SubcategoryStateData.length])


    return (
        <>
            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Sub Category
                            <Link to="/admin/subcategory/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link>
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
                                    {data.map((item) => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={60} width={80} alt='' />
                                            </Link></td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td><Link to={`/admin/subcategory/update/${item.id}`} className='btn btn-primary'> <i className='bi bi-pencil'></i></Link> </td>
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
