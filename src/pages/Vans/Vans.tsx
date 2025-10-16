import React, { useEffect, useState } from 'react';
import Badge from '../../components/Badge/Badge';
import './Vans.css';
import { Link } from 'react-router-dom';
import { Van } from '../../types/types';

const filterList = ["Simple", "Luxury", "Rugged"];

const VanItem: React.FC<Van> = ({ id, name, price, description, imageUrl, type }) => {
    const capitalizeType = type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <li className="vanlist-item">
            <div className="image-container">
                <img src={imageUrl} alt={`${name} picture`} />
            </div>
            <div className="van-info">
                <span className="van-name">{name}</span>
                <div className="van-price">
                    <span className="price-text">${price}</span>
                    <span className="day-text">/day</span>
                </div>
            </div>
            <Badge pill size="lg" color={type}>{capitalizeType}</Badge>
        </li>
    )
}

const Vans: React.FC = () => {
    const [vans, setVans] = useState<Van[]>([]);

    useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((data) => setVans(data.vans))
            .catch((error) => console.error(`Error fetching vans. Error: ${error.message}`));
    }, []);

    const filterOptions = filterList.map(filter => {
        return (
            <Badge key={filter} pill>
                {filter}
            </Badge>
        )
    })

    const vansElements = vans.map(van => {
        return (
            <Link key={van.id} to={`/vans/${van.id}`}><VanItem {...van} /></Link>
        )
    })

    return (
        <main className="vanlist-container">
            <h2 className="vanlist-header">Explore our van options</h2>
            <div className="filter-container">
                <div className="filter-options">
                    {filterOptions}
                </div>
                <span className="clear-filters">Clear filters</span>
            </div>
            <ul className="vanlist-list">
                {vansElements}
            </ul>
        </main>
    );
};

export default Vans;