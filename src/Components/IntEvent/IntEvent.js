import React from 'react';

const IntEvent = (props) => {
    const { img, title, info, date } = props.intEvent;

    return (

        <div class="col">
            <div class="card h-100 border-0">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold text-danger">{title}</h5>
                    <p class="card-text">{info}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>

    );
};

export default IntEvent;