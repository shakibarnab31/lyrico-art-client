import React from 'react';
import './Service.css'

const Service = (props) => {
    const { img, name, info, time, duration, price } = props.service;
    return (
        <div class="col">
            <div class="card h-100 service-image">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{info}</p>
                    <p>{time}</p>
                    <p>{duration}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;