import React, { useEffect, useState } from 'react';
import IntEvent from '../IntEvent/IntEvent';
import OurEvent from '../OurEvent/OurEvent';

const Events = () => {
    const [intEvents, setIntEvets] = useState([]);
    const [ourEvents, setOurEevents] = useState([])
    useEffect(() => {
        fetch('./internationalEvents.JSON')
            .then(res => res.json())
            .then(data => setIntEvets(data))
    }, []);
    useEffect(() => {
        fetch('./ourEvents.JSON')
            .then(res => res.json())
            .then(data => setOurEevents(data))
    }, [])
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-5 mx-5">
                {intEvents.map(intEvent => <IntEvent
                    key={intEvent.id}
                    intEvent={intEvent}></IntEvent>)}</div>
            <h1>Our events</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5">
                {ourEvents.map(ourEvent => <OurEvent ourEvent={ourEvent}></OurEvent>)}

            </div>
        </div>

    );
};

export default Events;