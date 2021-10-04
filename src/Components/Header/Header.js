import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (

        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav  mx-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/home">Home</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/services">Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/events">Events</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/about">About</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            <div className="d-flex mt-5 pt-5 mx-5  ">

                <div>
                    <h1 className="header-title text-start  ">LYRICO <br />
                        <span className="fs-1">
                            ART And Music School</span> </h1>
                    <p className=" text-start">We are providing the best qualities teaching environment for learning art and music. <br /> Start your journey now!!!!!</p>

                </div>
            </div>




        </div>);
};

export default Header;