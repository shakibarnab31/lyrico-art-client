import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (

        <div className='header'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav  mx-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold fs-5 " aria-current="page" to="/home" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Home</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold fs-5 " aria-current="page" to="/services" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold fs-5 " aria-current="page" to="/events" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Events</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold fs-5 " aria-current="page" to="/about" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>About</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            <div className="d-flex mt-5 pt-5 mx-5  ">

                <div>
                    <h1 className=" text-start header-title">Lyrico</h1>
                    <h1 className=" text-start fw-bolder text-success">Art And Music School</h1>
                    <p className=" text-start w-50 text-danger fst-italic">We are providing the best qualities teaching environment for learning art and music.Start your journey now!!!!!</p>

                </div>
            </div>




        </div>);
};

export default Header;