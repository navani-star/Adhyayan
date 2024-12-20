import React from 'react'
const Footer = () => {
  return (
    <div className='bg-info w-100 footer'>
      <div className='fs-1 fw-bold pt-5 pb-3 text-center'>
        Adhyayan IT Training Placement.....
      </div>
      <div className='row m-0 p-0'>
        <div className='mt-5 col-6 text-center p-0'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.907148315308!2d73.81124657524724!3d18.487864582599332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4501e43173%3A0xcf8a06e3b69a117f!2sAdhyayan%20IT%20Training%20%26%20Placement!5e0!3m2!1sen!2sin!4v1733394013267!5m2!1sen!2sin" width="600" height="450" loading="lazy" title='map' className='rounded-3' ></iframe>
        </div>
        <div className='col-6 text-center ps-3 mt-3'>
          <div className='fs-1 fw-bold text-success '>We Are</div>
          <div className='fs-1 fw-bold text-primary'>Avialable Here.....</div>
          <div className='fs-1 fw-bold text-danger'>
            <div className='text-start d-flex'>
              <div className='me-3'>
                <i className='bi bi-pin-map text-light'></i>
              </div>
              <div>
                Adhyayan, Office No.306, 3rd Floor,Krishnai Plaza,Canal Rd, Karve Nagar, Pune, Maharastra 411052 .
              </div>
            </div>
            <span className='me-3'><i className="bi bi-telephone-outbound text-light"></i></span>
            <span className='text-dark'>+91 869-869-3458</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer