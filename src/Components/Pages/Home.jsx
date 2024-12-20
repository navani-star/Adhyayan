import React from 'react'
import html from '../Static/html.jpeg'
import Javascript from '../Static/Javascript.jpeg'
import Reacts from '../Static/React.png'
import bootstrap from '../Static/bootstrap.png'
import Node from '../Static/node.png'
import Express from '../Static/express.png'
import MongoDb from '../Static/mongodb.avif'
import Github from '../Static/github.webp'
import Netlify from '../Static/netlify.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div className='bg-dark m-0 p-0'>  {/*main div*/}
            {/* Carasoul Section */}
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={html} className="d-block w-100" alt="..." height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src={Javascript} className="d-block w-100" alt="..." height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src={Reacts} className="d-block w-100" alt="..." height={500} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div> {/*Cards div */}
                <div className="d-flex justify-content-evenly mt-5 pb-5">
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={html} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment</NavLink>
                            <a href="/Syllabus/html_tutorial.pdf" className="btn btn-outline-primary ms-3" target='blank' download>Download</a>
                        </div>

                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={Javascript} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">JAVASCRIPT</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="/Syllabus/javascript_tuto.pdf" className="btn btn-outline-primary ms-3" target='blank' download>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '20rem' }}>
                        <img src={Reacts} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">REACT JS</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="/Syllabus/React.pdf" className="btn btn-outline-primary ms-3" target='blank' download>Download</a>
                        </div>
                    </div>
                </div> {/*First Card */}

                <div className="d-flex justify-content-evenly mt-5 pb-5">
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={bootstrap} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">BOOTSTRAP</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="./" className="btn btn-outline-primary ms-3">Download</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={Node} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">NODE JS</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="./" className="btn btn-outline-primary ms-3">Download</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Express} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">EXPRESS JS</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="./" className="btn btn-outline-primary ms-3">Download</a>
                        </div>
                    </div>
                </div> {/*Second Card */}

                <div className="d-flex justify-content-evenly mt-5 pb-5">
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={MongoDb} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">MONGODB</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="./" className="btn btn-outline-primary ms-3">Download</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={Github} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">GITHUB</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="./" className="btn btn-outline-primary ms-3">Download</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Netlify} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">NETLIFY</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <NavLink to='/register' className="btn btn-outline-primary">Enrolment </NavLink>
                            <a href="./" className="btn btn-outline-primary ms-3">Download</a>
                        </div>
                    </div>
                </div> {/*Third Card */}
            </div>
        </div>
    );
}
export default Home
