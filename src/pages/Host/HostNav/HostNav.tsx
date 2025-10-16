import React from 'react';
import './HostNav.css';
import { NavLink } from 'react-router-dom';

const HostNav: React.FC = () => {
    return (
        <nav className="hostnav">
            <NavLink to="./" end className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}>
                Dashboard
            </NavLink>
            <NavLink to="./income" className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}>
                Income
            </NavLink>
            <NavLink to="./vans" className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}>
                Vans
            </NavLink>
            <NavLink to="./reviews" className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}>
                Reviews
            </NavLink>
        </nav>
    );
};

export default HostNav;