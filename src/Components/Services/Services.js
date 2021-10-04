import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h2>our services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5">
                {services.map(service => <Service
                    key={service.id}
                    service={service}></Service>)}

            </div>
        </div>
    );
};

export default Services;