import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AdminSidebar from '../../../Components/AdminComponent/AdminSidebar'
import TextValidators from '../../../FormValidators/TextValidators'
//import ImageValidators from '../../../FormValidators/ImageValidators'

import { getFaq, updateFaq } from "../../../Redux/ActionCreators/FaqActionCreators"

export default function AdminUpdateFaqPage() {
    let { id } = useParams()
    let [data, setData] = useState({
        question: '',
        answer: '',
        status: true
    })

    // if Error Message showing
    let [errorMessage, setErrorMessage] = useState({
        question: "",
        answer: ""
    })

    // if Error Message not showing

    let [show, setShow] = useState(false)

    //let [FaqStateData, setFaqStateData] = useState([])

    let FaqStateData = useSelector(state => state.FaqStateData)
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

            let item = FaqStateData.find(x => x.id !== id && x.question?.toLocaleLowerCase() === data.question?.toLocaleLowerCase())

            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, 'question': "Faq with This question is already exist" })
                return
            }

            dispatch(updateFaq({ ...data })) // in not real backend

            /* 
            if real backend then below code
 
            let formData=new FormData()
            formData.append("id", data.id)
            formData.append("name", data.name)
            formData.append("pic", data.pic)
            formData.append("status", data.status)
            dispatch(updateFaq(formData)) */

            navigate("/admin/faq")
        }

    }

    useEffect(() => {

        (() => {
            dispatch(getFaq())
            if (FaqStateData.length) {
                let item = FaqStateData.find(x => x.id == id)
                if (item)
                    setData({ ...data, ...item })
                else
                    navigate("/admin/faq")
            }
        })()

    }, [FaqStateData.length])

    return (
        <>
            <div className='container my-3 admin-wrapper'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Update Faq
                            <Link to="/admin/faq"><i className='bi bi-arrow-left text-light float-end'></i></Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Question <span className='text-danger'>*</span></label>
                                    <input type='text' name='question' value={data.question} onChange={getInputData} placeholder='Question' className={`form-control ${show && errorMessage.question ? 'border-danger' : 'border-primary'} `} />
                                    {show && errorMessage.question ? <p className='text-danger'>{errorMessage.question}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Answer <span className='text-danger'>*</span></label>
                                    <textarea name='answer' value={data.answer} rows="3" placeholder='Answer' onChange={getInputData} className={`form-control ${show && errorMessage.answer ? 'border-danger' : 'border-primary'} `}></textarea>
                                    {show && errorMessage.answer ? <p className='text-danger'>{errorMessage.answer}</p> : null}
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Status <span className='text-danger'>*</span></label>
                                    <select name='status' value={data.status ? "1" : "0"} onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
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