import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const navigate = useNavigate()
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')

  const logicHandler = () => {
    if(username === 'Admin' && password === 'Admin@123'){
      alert('Log in Successfully....!')
      navigate('/Student')
     
    }
    else{
      alert('Check Username and Password')
    }
    
  }
  return (
    <div className='bg-dark'>
      <div className='w-75 mx-auto rounded-3 p-3 mx-auto'>
        <h1 className='text-dark fs-2'>Admin dashboard</h1>
        <div>
          <input type='text'
            className='form-control rounded-3 p-2'
            placeholder='Enter A Username'
            value={username}
            onChange={(event)=>setusername(event.target.value)} />
        </div>
        <div>
          <input type='password'
            className='form-control mt-3 rounded-3 mb-3 p-2'
            placeholder='Enter A Password' 
            value={password}
            onChange={(event)=>setpassword(event.target.value)}/>
        </div>
        <div className='text-center'>
          <button className='btn btn-success w-50 rounded-5 p-3' onClick={logicHandler}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}
export default Admin