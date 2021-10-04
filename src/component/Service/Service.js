import React from 'react';

const Service = (props) => {
    const {img,name ,lecture,insturctor, upcomming} = props.service;

    return (
        <div className = "courseStyle">
            <div>
                <img className= "w-25 image" src={img} alt="" />
            </div>
            <div>
            <p>Name:<b> {name}</b></p>
            <p>Instructor:<b> {insturctor}</b></p>
            <p>Lecture: <b> {lecture}</b></p>
            <p>upcomming:<b> {upcomming}</b></p>
            </div>
        </div>
    );
};

export default Service;