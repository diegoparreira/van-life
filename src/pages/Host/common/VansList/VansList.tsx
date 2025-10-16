import React, { useEffect, useState } from 'react';
import { Van } from '../../../../types/types';
import './VansList.css';

interface VansListProps {
    editable?: boolean
    onClick?: (id: number) => void
}

interface VanProps {
    van: Van
    editable: boolean
    onClick?: (id: number) => void
}

const VanComponent: React.FC<VanProps> = ({ van, editable, onClick }) => {
    const { id, imageUrl, name, price } = van;

    const handleClick = (id: number) => {
        if (onClick) {
            onClick(id);
        }
    }

    return (
        <li className="host-van-item" onClick={() => handleClick(id)}>
            <div className="host-van-details">
                <div className="host-van-image-container">
                    <img src={imageUrl} alt={`${name} picture`} />
                </div>
                <div className="host-van-info">
                    <span className="host-van-name">{name}</span>
                    <span className="host-van-price">${price}/day</span>
                </div>
            </div>
            {editable ? <div>Edit</div> : null}
        </li>
    )
}

const VansList: React.FC<VansListProps> = ({ editable = false, onClick = () => { } }) => {
    const [vans, setVans] = useState<Van[]>([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(json => setVans(json.vans))
            .catch(error => console.error(`Erro fetching vans. Error: ${error.message}`))
    }, []);


    return (
        <ul className="hostvans">
            {vans?.length > 0 && vans.map(van => {
                return (
                    <VanComponent key={van.id} editable={editable} van={van} onClick={onClick} />
                )
            })}
        </ul>
    );
};

export default VansList;