import React from 'react';
import './Catagories.css'
import painting from '../../images/painting.jfif'
import sketch from '../../images/sketch.jfif'
import drawing from '../../images/drawing.jfif'
import sculpture from '../../images/sculpture.jfif'
import digital from '../../images/digital.jfif'

const Catagories = () => {
    return (

        <div class="row row-cols-5 row-cols-md-5 mx-4 my-5">
            <div class="col">
                <div class="card border-0">
                    <img src={painting} class="card-img-top catagories-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Painting</h5>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card  border-0">
                    <img src={sketch} class="card-img-top catagories-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Sketch</h5>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card  border-0">
                    <img src={drawing} class="card-img-top catagories-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Drawing</h5>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card  border-0">
                    <img src={sculpture} class="card-img-top catagories-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Sculpture</h5>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card  border-0">
                    <img src={digital} class="card-img-top catagories-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Digital</h5>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Catagories;