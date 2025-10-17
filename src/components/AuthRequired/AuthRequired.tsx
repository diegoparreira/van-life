import React, { useState } from 'react';
import './AuthRequired.css';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const AuthRequired: React.FC = ({ }) => {
    const loggedIn = localStorage.getItem('logged') === 'true';
    console.log(loggedIn);
    const location = useLocation();
    const pathUrl = location.pathname;
    console.log(pathUrl);

    return loggedIn
        ? <Outlet />
        : <Navigate
            to="/login"
            state={{ message: "You need to login first", from: pathUrl }}
            replace
        />
};

export default AuthRequired;