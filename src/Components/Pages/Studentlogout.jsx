import React from 'react'
const Studentlogout = ({onLogout,student}) => {
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
            {
              student.map((stu,index)=>{
                return(
                  <tr key={index}>
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
                </tr>
                )
              })
            }
           
          </tbody>
         </table>
        <div className='text-center mt-5 mb-5'>
            <button className='btn btn-success w-50 p-3 rounded-3' onClick={onLogout}>Log Out</button>
        </div>
        
    </div>
  )
}

export default Studentlogout