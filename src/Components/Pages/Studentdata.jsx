import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'

const Studentdata = () => {
  const [student, setstudent] = useState([])
  const [searchName,setsearchName]=useState('')
  

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8005/students')
    //console.log(response)

    const result = response.data
    //console.log(result)
    setstudent(result)

  }
  useEffect(() => {
    fetchData()
  }, [])

  const navigate=useNavigate()

  const logoutHandler=()=>{
      navigate('/admin')
      alert('Log Out....!')
  }
  const searchHandler=(event)=>{
    const search=event.target.value
    setsearchName(search)

  }
  const searchNameHandler= student.filter((stu)=>{
    return stu.course.toLowerCase().includes(searchName.toLowerCase())
   
  })

  return (
    <div>
      <div className='mb-3 mt-3 w-75 mx-auto'>
        <input type='text'
               className='form-control'
               placeholder='Enter A Course Name'
                value={searchName}
                onChange={searchHandler}
/>      </div>

      <table className='table border p-3'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Fist Name</th>
            <th>Last Name</th>
            <th>Mother Name</th>
            <th>Father Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Fees</th>
            <th>DOB</th>
            <th>Pincode</th>
            <th>Course</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            searchNameHandler.map((stu,index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stu.fname}</td>
                  <td>{stu.lname}</td>
                  <td>{stu.mname}</td>
                  <td>{stu.Fname}</td>
                  <td>{stu.address}</td>
                  <td>{stu.gender}</td>
                  <td>{stu.course}</td>
                  <td>{stu.fees}</td>
                  <td>{stu.dob}</td>
                  <td>{stu.pincode}</td>
                  <td>{stu.Course}</td>
                  <td>{stu.email}</td>
                  <td>{stu.password}</td>
                  <td>
                   <NavLink to={`/update/student/${stu.id}`}> <button className='btn btn-danger m-1'>Edit</button></NavLink>
                  <NavLink to={`/delete/student/${stu.id}`}><button className='btn btn-success'>Delete</button></NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='text-center'>
        <button className='btn btn-danger w-25 rounded-5 mt-5 mb-5' onClick={logoutHandler}>Log Out</button>
      </div>
    </div>
  )
}
export default Studentdata