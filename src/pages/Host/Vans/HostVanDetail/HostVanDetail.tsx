import React from 'react';
import './HostVanDetail.css';
import { useOutletContext } from 'react-router-dom';
import { Van } from '../../../../types/types';

const HostVanDetail: React.FC = () => {
    const { van } = useOutletContext<{ van: Van }>();

    return (
        <div className="hostvandetail">
            <p><b>Name:</b> <span className="van-text">{van.name}</span></p>
            <p><b>Category:</b> <span className="van-text">{van.type}</span></p>
            <p><b>Decription:</b> <span className="van-text">{van.description}</span></p>
            <p><b>Visibility:</b> <span className="van-text">Public</span></p>
        </div >
    );
};

export default HostVanDetail;