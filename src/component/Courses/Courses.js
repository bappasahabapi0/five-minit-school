import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        fetch('./course.json')
        .then(response =>response.json())
        .then(data => setCourses(data))

    },[])
    return (
        <div>
            {/* <h2>Total Course is : {courses.length}</h2> */}
            <div className= "course-container mt-3 ">
            {
                courses.map(course =><Course
                key ={course.key}
                course={course}
                ></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;