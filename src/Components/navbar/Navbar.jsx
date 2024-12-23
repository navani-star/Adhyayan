import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'
import Adhyayan from '../Static/Adhyayan.png'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
                     <img src={Adhyayan} alt='...' width='200' height='70' className='ms-3'/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="w-5 me-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-3 fs-2">
                                <NavLink className="btn btn-primary" aria-current="page" to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-2">
                                <NavLink className="btn btn-success " to='/admin'>Admin</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-2">
                                <NavLink className="btn btn-warning " to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-2">
                                <NavLink className="btn btn-secondary" to='/career'>Career</NavLink>
                            </li>
                            <li className="nav-item ms-3 fs-2">
                                <NavLink className="btn btn-info" to='/Studentlogin'>Log In</NavLink>
                            </li>
                        </ul>
                  </div>
            </nav>
        <Outlet/>
    </div>
  )
}
export default Navbar
