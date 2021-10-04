import React, { useEffect, useState } from 'react';
import ServiceMain from '../ServiceMain/ServiceMain';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (

        <div class="row row-cols-1 row-cols-md-3 g-4 mx-5">
            {services.slice(0, 3).map(service => <ServiceMain
                key={service.id}
                service={service}></ServiceMain>)}

        </div>
    );
};

export default Home;