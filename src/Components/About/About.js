import React from 'react';
import artImage from '../../images/image-57.jpg'
import './About.css'
import missionImage from '../../images/wooman.webp'
import musicImage from '../../images/female-student-playing-piano (1).jpg'

const About = () => {
    return (
        <div className="">
            <h2>About us</h2>
            <div className=" art d-flex justify-content-center mt-5 mx-5">
                <img className="mx-5" src={artImage} alt="" />
                <div className="m-5 text-start">
                    <p className="text-warning"> Art School</p>
                    <h1>A leader in <br />
                        Educating Artist <br />
                        Since 2010</h1>
                    <p>We are providing best quality art teaching to the students since 2010.Many of our students participate various international events and started their cherish dream career as Artist.We are so proud for their success.</p>
                </div>
            </div>
            <div className=" mission d-flex justify-content-center mt-5">

                <div className="m-5 pt-5 text-start">
                    <p className="text-warning">Mission</p>
                    <h1>The heighst  <br />
                        caliber of artistic <br />
                        Education</h1>
                    <p>We are providing best quality art teaching to the students since 2010.Many of our students participate various international events and started their cherish dream career as Artist.We are so proud for their success.</p>
                </div>
                <img className="mx-5 mt-5" src={missionImage} alt="" />
            </div>
            <div className="music d-flex justify-content-center mt-5 mx-5">
                <img className="mx-5" src={musicImage} alt="" />
                <div className="m-5 text-start">
                    <p className="text-warning">Music School</p>
                    <h1>A leader in <br />
                        Educating Musician <br />
                        Since 2010</h1>
                    <p>We are providing best quality art teaching to the students since 2010.Many of our students participate various international events and started their cherish dream career as Artist.We are so proud for their success.</p>
                </div>
            </div>
        </div>
    );
};

export default About;