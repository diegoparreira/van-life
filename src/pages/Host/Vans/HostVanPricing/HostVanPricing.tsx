import React from 'react';
import './HostVanPricing.css';
import { Van } from '../../../../types/types';
import { useOutletContext } from 'react-router-dom';

const HostVanPricing: React.FC = ({ }) => {
    const { van } = useOutletContext<{ van: Van }>();
    return (
        <div className="hostvanpricing">
            <span className="host-van-pricing">$<b>{van.price.toFixed(2)}</b>/day</span>
        </div>
    );
};

export default HostVanPricing;