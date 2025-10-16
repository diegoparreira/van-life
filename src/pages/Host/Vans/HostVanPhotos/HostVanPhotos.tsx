import React from 'react';
import './HostVanPhotos.css';
import { Van } from '../../../../types/types';
import { useOutletContext } from 'react-router-dom';

const HostVanPhotos: React.FC = ({ }) => {
    const { van } = useOutletContext<{ van: Van }>();

    return (
        <div className="hostvanphotos">
            <div className="host-van-image-container">
                <img src={van.imageUrl} alt={`${van.name} picture`} />
            </div>
        </div>
    );
};

export default HostVanPhotos;