import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AdminSidebar from '../../../Components/AdminComponent/AdminSidebar'
import TextValidators from '../../../FormValidators/TextValidators'
//import ImageValidators from '../../../FormValidators/ImageValidators'

import { getFeature, updateFeature } from "../../../Redux/ActionCreators/FeatureActionCreators"

export default function AdminUpdateFeaturePage() {
    let { id } = useParams()
    let [data, setData] = useState({
        name: '',
        icon: '',
        description: '',
        status: true
    })

    // if Error Message showing
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        icon: "",
        description: ""
    })

    // if Error Message not showing

    let [show, setShow] = useState(false)

    //let [FeatureStateData, setFeatureStateData] = useState([])

    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function getInputData(e) {

        let { name, value } = e.target


        // if Real backend the below code use
        //let value = name === "pic" ? e.target.files[0].name : e.target.value

        // if Dummy backend the below code use

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })

        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
    }

    async function postData(e) {

        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {

            let item = FeatureStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())

            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, 'name': "Feature with This name is already exist" })
                return
            }

            dispatch(updateFeature({ ...data })) // in not real backend

            /* 
            if real backend then below code
 
            let formData=new FormData()
            formData.append("id", data.id)
            formData.append("name", data.name)
            formData.append("pic", data.pic)
            formData.append("status", data.status)
            dispatch(updateFeature(formData)) */

            navigate("/admin/feature")
        }

    }

    useEffect(() => {

        (() => {
            dispatch(getFeature())
            if (FeatureStateData.length) {
                let item = FeatureStateData.find(x => x.id == id)
                if (item)
                    setData({ ...data, ...item })
                else
                    navigate("/admin/feature")
            }
        })()

    }, [FeatureStateData.length])

    return (
        <>
            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Update Feature
                            <Link to="/admin/feature"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name <span className='text-danger'>*</span></label>
                                    <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Feature Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'} `} />
                                    {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Description <span className='text-danger'>*</span></label>
                                    <textarea name='description' value={data.description} rows="3" placeholder='Description' onChange={getInputData} className={`form-control ${show && errorMessage.description ? 'border-danger' : 'border-primary'} `}></textarea>
                                    {show && errorMessage.description ? <p className='text-danger'>{errorMessage.description}</p> : null}
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Icon <span className='text-danger'>*</span></label>
                                    <input type='text' name='icon' value={data.icon} placeholder='Boostrap Icon Tag' onChange={getInputData} className={`form-control ${show && errorMessage.icon ? 'border-danger' : 'border-primary'} `} />
                                    {show && errorMessage.icon ? <p className='text-danger'>{errorMessage.icon}</p> : null}
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