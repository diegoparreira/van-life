import React from 'react';
import './Host.css';
import HostNav from './HostNav/HostNav';
import { Outlet } from 'react-router-dom';

const Host: React.FC = ({ }) => {
    return (
        <main className="host">
            <HostNav />
            <Outlet />
        </main>
    );
};

export default Host;