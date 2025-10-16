import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VansList.css';
import { Van } from '../../../../types/types';

interface VansListProps {
    editable?: boolean
}

interface VanProps {
    van: Van
    editable: boolean
    handleClick: () => void
}

const VanComponent: React.FC<VanProps> = ({ van, editable, handleClick }) => {
    const { id, imageUrl, name, price } = van;
    return (
        <li className="host-van-item" onClick={handleClick}>
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

const VansList: React.FC<VansListProps> = ({ editable = false }) => {
    const [vans, setVans] = useState<Van[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(json => setVans(json.vans))
            .catch(error => console.error(`Erro fetching vans. Error: ${error.message}`))
    }, []);

    function handleClick(id: number) {
        console.log("Clicked")
        navigate(`/host/vans/${id}`);
    }

    return (
        <ul className="hostvans">
            {vans?.length > 0 && vans.map(van => {
                return (
                    <VanComponent key={van.id} editable={editable} van={van} handleClick={() => handleClick(van.id)} />
                )
            })}
        </ul>
    );
};

export default VansList;