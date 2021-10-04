import React from 'react';

const OurEvent = (props) => {
    const { img, Title, info } = props.ourEvent;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top h-50" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{Title}</h5>
                    <p class="card-text">{info}</p>

                </div>
            </div>
        </div>
    );
};

export default OurEvent;