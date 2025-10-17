import React, { useEffect, useState } from 'react';
import Badge from '../../components/Badge/Badge';
import './Vans.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Van } from '../../types/types';
import { genNewSearchParamsObj, genNewSearchParamString } from '../../utils/functions';

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
            <Badge pill size="lg" className={`${type} selected`}>{capitalizeType}</Badge>
        </li>
    )
}

const Vans: React.FC = () => {
    const [vans, setVans] = useState<Van[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const filterType = searchParams.get('type')?.toLocaleLowerCase();

    useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((data) => setVans(data.vans))
            .catch((error) => console.error(`Error fetching vans. Error: ${error.message}`));
    }, []);

    const displayedVans = filterType ? vans.filter(van => van.type === filterType) : vans;

    const filterOptions = filterList.map(filter => {
        const filterLowerCase = filter.toLowerCase();
        const searchParamString = genNewSearchParamString(searchParams, 'type', filter.toLowerCase());
        return (
            <Badge
                key={filter}
                className={filterType === filterLowerCase ? `${filterLowerCase} selected` : `${filterLowerCase} inactive`}
                size="lg"
            >
                <Link to={searchParamString}>{filter}</Link>
                {/* <button onClick={() => genNewSearchParamsObj(searchParams, setSearchParams, 'type', filter.toLowerCase())}>{filter}</button> */}
            </Badge>
        )
    })

    const vansElements = displayedVans
        .map(van => {
            return (
                <Link key={van.id} to={`${van.id}`} state={{ search: searchParams.toString() }}><VanItem {...van} /></Link>
            )
        })

    return (
        <main className="vanlist-container">
            <h2 className="vanlist-header">Explore our van options</h2>
            <div className="filter-container">
                <div className="filter-options">
                    {filterOptions}
                </div>
                {filterType ? <Link to="." className="clear-filters">Clear filters</Link> : null}
                {/* <button onClick={() => genNewSearchParamsObj(searchParams, setSearchParams, 'type', null)} className="clear-filters">Clear filters</button> */}
            </div>
            <ul className="vanlist-list">
                {vansElements}
            </ul>
        </main>
    );
};

export default Vans;