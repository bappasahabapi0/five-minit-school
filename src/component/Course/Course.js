import React from 'react';
import './Course.css';

const Course = (props) => {
    const {img,name ,lecture,insturctor, cost} = props.course;
    return (
        <div className = "courseStyle">
            <div>
                <img className= "w-25 image" src={img} alt="" />
            </div>
            <div>
            <p>Name:<b> {name}</b></p>
            <p>Instructor:<b> {insturctor}</b></p>
            <p>Lecture: <b> {lecture}</b></p>
            <p>Cost:<b>{cost}</b></p>
            </div>
        </div>
    );
};

export default Course; 