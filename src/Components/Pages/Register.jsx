import React, { useState } from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Register = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm()

  const postdata = (data) => {
    axios.post('http://localhost:8005/students', data)
    alert('Data Added !!!')
    reset()

  }
  const [course, setcourse] = useState('')
  const courses = {
    HTML: '20000',
    JAVASCRIPT: '30000',
    REACT: '40000',
    BOOTSTRAP: '45000',
    NODEJS: '35000',
    EXPRESSJS: '450000',
    MONGODB: '25000'
  }
  const coursehandler = (event) => {
    const selectcourse = event.target.value
    setcourse(selectcourse)
    const selectfees = courses[selectcourse]
    setValue('fees', selectfees)

  }
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample" className="img-fluid hitesh " />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Student Enrollment form</h3>

                      <form onSubmit={handleSubmit(postdata)}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('fname', {
                                required: 'First Name is Entered',
                                pattern: {
                                  value: /^[A-Za-z]+$/,
                                  message: 'Only Alphabetes are Valid'
                                }
                              })}
                              />
                              <label className="form-label" for="form3Example1m">First name</label>
                              {
                                errors.fname && <p className='text-danger'>{errors.fname.message}</p>
                              }
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('lname', {
                                required: 'Last Name Entered',
                                pattern: {
                                  value: /^[A-Za-z]+$/,
                                  message: 'Only Alphabets are Valid',
                                }

                              })}
                              />
                              <label className="form-label" for="form3Example1n">Last name</label>
                              {
                                errors.lname && <p className='text-danger'>{errors.lname.message}</p>
                              }
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m1" className="form-control form-control-lg" {...register('mname', {
                                required: 'Mother Name Entered',
                                pattern: {
                                  value: /^[A-Za-z]+$/,
                                  message: 'Only Alphabets are Valid'
                                }
                              })} />
                              <label className="form-label" for="form3Example1m1">Mother's name</label>
                              {
                                errors.mname && <p className='text-danger'>{errors.mname.message}</p>
                              }
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n1" className="form-control form-control-lg" {...register('Fname', {
                                required: 'Father Name Entered',
                                pattern: {
                                  value: /^[A-Za-z/]+$/,
                                  message: 'Only Alphabets are valid'
                                }

                              })} />
                              <label className="form-label" for="form3Example1n1">Father's name</label>
                              {
                                errors.Fname && <p className='text-danger'>{errors.Fname.message}</p>
                              }
                            </div>
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address', {
                            required: 'Enter Address Here',
                            pattern: {
                              value: /^[A-Za-z/]+$/,
                              message: 'Alphabets And Number Valid'
                            }
                          })} />
                          <label className="form-label" for="form3Example8">Address</label>
                          {
                            errors.address && <p className='text-danger'>{errors.address.message}</p>
                          }
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                              value="Female" {...register('gender')} />
                            <label className="form-check-label" for="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                              value="Male"  {...register('gender')} />
                            <label className="form-check-label" for="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                              value="Other" {...register('gender')} />
                            <label className="form-check-label" for="otherGender">Other</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select className='w-100 form-control' {...register('course')} onChange={coursehandler} value={course}>
                              <option value=''>Select Course</option>
                              {
                                Object.keys(courses).map((course) => {
                                  return (
                                    <option key={course}>
                                      {course}
                                    </option>
                                  )
                                })
                              }
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <input type='text'
                              className='form-control'
                              readOnly
                              placeholder='Select Course for fees'
                              {...register('fees')} />
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example9" className="form-control form-control-lg" {...register('dob')} />
                          <label className="form-label" for="form3Example9">DOB</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example90" className="form-control form-control-lg" {...register('pincode')} />
                          <label className="form-label" for="form3Example90">Pincode</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example99" className="form-control form-control-lg" {...register('Course') }/>
                          <label className="form-label" for="form3Example99">Course</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example97" className="form-control form-control-lg" {...register('email')} />
                          <label className="form-label" for="form3Example97">Email ID</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form3Example97" className="form-control form-control-lg" {...register('password')} />
                          <label className="form-label" for="form3Example97">Password</label>
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Register