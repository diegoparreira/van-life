import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="notfound">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="home-btn">Return to home</Link>
        </div>
    );
};

export default NotFound;