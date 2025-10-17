import React, { useEffect, useState } from 'react';
import { Van } from '../../../../types/types';
import './VansList.css';
import { getVans } from '../../../../api';
import Loading from '../../../../components/Loading/Loading';
import ErrorDetail from '../../../../components/ErrorDetail/ErrorDetail';

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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadVans() {
            setIsLoading(true);
            try {
                const vans = await getVans();
                setVans(vans);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        loadVans();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorDetail error={error} />
    }

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