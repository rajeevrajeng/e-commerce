import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AdminSidebar from '../../../Components/AdminComponent/AdminSidebar'
import TextValidators from '../../../FormValidators/TextValidators'
import ImageValidators from '../../../FormValidators/ImageValidators'

import { getBrand, updateBrand } from "../../../Redux/ActionCreators/BrandActionCreators"

export default function AdminUpdateBrandPage() {
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

    //let [BrandStateData, setBrandStateData] = useState([])

    let BrandStateData = useSelector(state => state.BrandStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputData(e) {

        let name = e.target.name
        // for image upload
        let value = name === "pic" ? "brand/" + e.target.files[0].name : e.target.value

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

            let item = BrandStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())

            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, 'name': "Brand with This name is already exist" })
                return
            }


            /* let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/brand/${id}`, {
                method: "PUT",

                headers: {

                    "context-type": "application/json"
                },
                //javascript to json convert
                body: JSON.stringify({ ...data })
            })

            response = await response.json()
            if (response)
                navigate("/admin/brand")
            else {
                alert("Something Went Wrong")
            } */

            dispatch(updateBrand({ ...data })) // in not real backend

            /* 
            if real backend then below code
 
            let formData=new FormData()
            formData.append("id", data.id)
            formData.append("name", data.name)
            formData.append("pic", data.pic)
            formData.append("status", data.status)
            dispatch(updateBrand(formData)) */

            navigate("/admin/brand")
        }

    }

    useEffect(() => {

        (() => {
            dispatch(getBrand())
            if (BrandStateData.length) {
                let item = BrandStateData.find(x => x.id == id)
                if (item)
                    setData({ ...data, ...item })
                else
                    navigate("/admin/brand")
            }
        })()

    }, [BrandStateData.length])

    /* useEffect(() => {

        (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/brand`, {

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
                setBrandStateData(response)
            }
            else
                navigation("/admin/brand")
            setBrandStateData(response)
        })()

    }, []) */

    return (
        <>
            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Update Brand
                            <Link to="/admin/brand"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name <span className='text-danger'>*</span></label>
                                    <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Brand Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'} `} />
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