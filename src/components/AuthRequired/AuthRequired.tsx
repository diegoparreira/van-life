import React, { useState } from 'react';
import './AuthRequired.css';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';


const AuthRequired: React.FC = ({ }) => {
    const { isLoggedIn, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Loading />;
    }

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