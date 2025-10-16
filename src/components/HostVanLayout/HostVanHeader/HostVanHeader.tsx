import React from 'react';
import './HostVanHeader.css';
import Badge from '../../Badge/Badge';
import { Van } from '../../../types/types';

interface HostVanHeaderProps {
    van: Van;
}

const HostVanHeader: React.FC<HostVanHeaderProps> = ({ van }) => {
    const capitalizeType = van.type.charAt(0).toUpperCase() + van.type.slice(1);

    return (
        <>
            <div className="van-card-header">
                <div className="van-card-image-container">
                    <img src={van?.imageUrl} alt={`${van?.name} picture`} />
                </div>
                <div className="van-card-header-text">
                    <Badge pill color={van?.type}>{capitalizeType}</Badge>
                    <span className='host-van-name'>{van?.name}</span>
                    <span className="host-van-price">$<b>{van?.price}</b>/day</span>
                </div>
            </div>
        </>
    );
};

export default HostVanHeader;