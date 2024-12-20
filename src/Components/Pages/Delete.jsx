import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
const Delete = () => {
    const [student,setstudent]=useState('')
    const {id}=useParams()
    const navigate=useNavigate()

    const getData= async ()=>{
        const response =await axios.get(`http://localhost:8005/students/${id}`)
        //console.log(response)
        const result=response.data
        //console.log(result)
        setstudent(result)
    }
    useEffect(()=>{
        getData()

    })
    const deleteDATA=()=>{
        axios.delete(`http://localhost:8005/students/${id}`)
        alert('DATA DELETED')
        navigate('/Student')
        window.location.reload()
    }


  return (
    <div>
        <h1>Delete Component</h1>
        <div className='bg-warning mt-5 mb-5 w-75 p-5 mx-auto rounded-5'>

        <div className='ms-5'>
             <h2>Student ID:-{student.id}</h2>
        </div>
        <div className='ms-5'>
          <h2>Student Name:-{student.fname}</h2>
        </div>
        <div className='ms-5'>
         <h2>Student Email:-{student.email}</h2>
        </div>
        <div className='ms-5'> 
          <h2>Student Course:-{student.Course}</h2>
        </div>
        <div className='ms-5'>
            <button className='btn btn-danger me-3' onClick={deleteDATA}>Yes</button>
            <NavLink><button className='btn btn-success'>No</button></NavLink>
        </div>
        </div>
    </div>
  )
}

export default Delete