import React from 'react';

const ServiceMain = (props) => {
    console.log(props.service)
    const { img, name, info, time, duration, price } = props.service;
    return (

        <div class="col">
            <div class="card h-100 service-image">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bolder text-danger">{name}</h5>
                    <p class="card-text">{info}</p>
                    <p className="fw-bold"> Time: {time}</p>
                    <p>{duration}</p>
                    <p className="fw-bold"> {price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceMain;