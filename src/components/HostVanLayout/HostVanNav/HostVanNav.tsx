import React from 'react';
import './HostVanNav.css';
import { NavLink } from 'react-router-dom';

interface HostVanNavProps {
    id: string | undefined;
}

const HostVanNav: React.FC<HostVanNavProps> = ({ id }) => {
    return (
        <nav className="header-links host-links">
            <NavLink
                to={`${id}`}
                end
                className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}
            >
                Details
            </NavLink>
            <NavLink
                to={`${id}/pricing`}
                className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}
            >
                Pricing
            </NavLink>
            <NavLink
                to={`${id}/photos`}
                className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}
            >
                Photos
            </NavLink>
        </nav>
    );
};

export default HostVanNav;