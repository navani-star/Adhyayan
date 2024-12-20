import axios from 'axios'
import React, { useState } from 'react'
import Studentlogout from './Studentlogout'
const Studentlogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loggedIn, setloggedIn] = useState([])

    const handleLogin = async () => {
        const response = await axios.get('http://localhost:8005/students')
        const result = response.data

        const stuLogin = result.filter((stu) => stu.email === email && stu.password === password)

        if (stuLogin.length>0) {
            setloggedIn(stuLogin)
            alert('Student Login Successful...')
        }
        else {
            alert('Invalid Email And Password...')
            setemail('')
            setpassword('')
        }
       
    }
    const hanleLogout = () => {
        setloggedIn([])
        setemail('')
        setpassword('')

    }
    if (loggedIn.length>0) {
        return <Studentlogout  student={loggedIn} onLogout={hanleLogout}/>
    }
    return (
        <div className='bg-dark'>
            <div className='bg-dark w-75 p-3 mx-auto rounded-3'>
                <div className='mt-5' >
                    <input type='email'
                        placeholder='Enter a Email'
                        className='form-control'
                        value={email}
                        onChange={((event) => setemail(event.target.value))}
                    />
                    <div>
                        <input type='password'
                            placeholder='Enter A Password'
                            className='form-control mt-3'
                            value={password}
                            onChange={((event) => setpassword(event.target.value))}
                        />
                    </div>
                    <div className='mt-3 text-center mb-3 mt-5'>
                        <button className='btn btn-danger ms-5 w-50 p-3 rounded-4' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Studentlogin