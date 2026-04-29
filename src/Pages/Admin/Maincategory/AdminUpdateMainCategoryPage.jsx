import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import AdminSidebar from '../../../Components/AdminComponent/AdminSidebar'
import TextValidators from '../../../FormValidators/TextValidators'
import ImageValidators from '../../../FormValidators/ImageValidators'

export default function AdminUpdateMainCategoryPage() {
    let { id } = useParams()
    let [data, setData] = useState({
        name: '',
        pic: '',
        status: true
    })

    // if Error Message showing
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: ""
    })

    // if Error Message not showing

    let [show, setShow] = useState(false)

    let [MaincategoryStateData, setMaincategoryStateData] = useState([])

    let navigate = useNavigate()

    function getInputData(e) {

        let name = e.target.name
        // for image upload
        let value = name === "pic" ? "maincategory/" + e.target.files[0].name : e.target.value

        // if Real backend the below code use
        //let value = name === "pic" ? e.target.files[0].name : e.target.value

        // if Dummy backend the below code use

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })

        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidators(e) : TextValidators(e) })
    }

    async function postData(e) {

        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {

            let item = MaincategoryStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())

            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, 'name': "Maincategory with This name is already exist" })
                return
            }

            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {
                method: "PUT",

                headers: {

                    "context-type": "application/json"
                },
                //javascript to json convert
                body: JSON.stringify({ ...data })
            })

            response = await response.json()
            if (response)
                navigate("/admin/maincategory")
            else {
                alert("Something Went Wrong")
            }
        }

    }

    useEffect(() => {

        (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {

                method: "GET",
                headers: {

                    "context-type": "application/json"
                }

            })
            response = await response.json()

            //  for edit recond
            let item = response.find(x => x.id === id)
            if (item) {
                setData({ ...data, ...item })
                setMaincategoryStateData(response)
            }
            else
                navigation("/admin/maincategory")
            setMaincategoryStateData(response)
        })()

    }, [])

    return (
        <>
            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Update Main Category
                            <Link to="/admin/maincategory"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name <span className='text-danger'>*</span></label>
                                    <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Full Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'} `} />
                                    {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Pic </label>
                                    <input type='file' name='pic' onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-primary'} `} />
                                    {show && errorMessage.pic ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Status <span className='text-danger'>*</span></label>
                                    <select name='status' value={data.status ? "1" : "0"} onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option vlaue="0">Inctive</option>
                                    </select>
                                </div>
                                <div className="col-12 mb-3">
                                    <button type='submit' className='btn btn-primary w-100'>Update </button>

                                </div>


                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}


// Note: npm i json-server installation any where on cmd prompt