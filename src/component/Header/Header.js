import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header" >
            <h1>Welcome to our 5 minit school 🏫  platform </h1>
            <nav className ="p-4">
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/course">Course</Link>
                <Link className="link" to="/services">Services</Link>
            </nav>
            
        </div>
    );
};

export default Header;