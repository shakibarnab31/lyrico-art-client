import React, { useEffect, useState } from 'react';
import './Home.css'
import Catagories from '../Catagories/Catagories';

import ServiceMain from '../ServiceMain/ServiceMain';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (

        <div>
            <div>
                <Catagories></Catagories>
            </div>
            <div className="welcome-note">
                <div className="m-5 p-5" >
                    <p className="text-warning">Welcome</p>
                    <h1 className="text-white">Resurrecting time <br />
                        tested skills</h1>
                    <p><small className="text-white">Traditionaly Passed From One Generation to Next</small></p>
                    <p className="text-warning">Lyrico is a well resourced and highly professional school,established in 2008 in response to the rarity of rigorous, representational art education. </p>
                </div>
            </div>
            <h1 className="m-5">Our Services</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5">

                {services.slice(0, 3).map(service => <ServiceMain
                    key={service.id}
                    service={service}></ServiceMain>)}

            </div>

        </div>
    );
};

export default Home;