import React, { useState } from 'react';
import './AuthRequired.css';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';


const AuthRequired: React.FC = ({ }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{
                    message: "You must log in first",
                    from: location.pathname
                }}
                replace
            />
        );
    }

    return <Outlet />;
};

export default AuthRequired;