import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(response =>response.json())
        .then(data => setServices(data))

    },[])
    return (
        <div>
            {/* <h2>Total Course is : {courses.length}</h2> */}
            <div className= "course-container mt-3 ">
            {
                services.map(service =><Service
                key ={service.key}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;