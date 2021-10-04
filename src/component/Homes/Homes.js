import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';

const Homes = () => {
    const [homes, setHomes] = useState([]);
    useEffect(()=>{
        fetch('./home.json')
        .then(response =>response.json())
        .then(data => setHomes(data))

    },[])
    return (
        <div>
            {/* <h2>Total Course is : {courses.length}</h2> */}
            <div className= "course-container mt-3 ">
            {
                homes.map(home =><Home
                key ={home.key}
                home={home}
                ></Home>)
            }
            </div>
        </div>
    );
};

export default Homes;