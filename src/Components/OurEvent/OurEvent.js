import React from 'react';

const OurEvent = (props) => {
    const { img, title, info } = props.ourEvent;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{info}</p>

                </div>
            </div>
        </div>
    );
};

export default OurEvent;