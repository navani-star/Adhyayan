import React from 'react'
const Studentlogout = ({onLogout,student}) => {
  console.log(student)
  return (
    <div>
         <h2 className='mt-3 mb-3 text-center text-secondary'>Student Details:-</h2>
         <table className='table border w-75 mx-auto'>
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.fname}</td>
              <td>{student.lname}</td>
              <td>{student.mname}</td>
              <td>{student.Fname}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.course}</td>
              <td>{student.fees}</td>
              <td>{student.dob}</td>
              <td>{student.pincode}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
            </tr>
          </tbody>
         </table>
        <div className='text-center mt-5 mb-5'>
            <button className='btn btn-success w-50 p-3 rounded-3' onClick={onLogout}>Log Out</button>
        </div>
        
    </div>
  )
}

export default Studentlogout