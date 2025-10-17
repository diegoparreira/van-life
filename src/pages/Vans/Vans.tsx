import React, { useEffect, useState } from 'react';
import Badge from '../../components/Badge/Badge';
import './Vans.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Van } from '../../types/types';
import { genNewSearchParamsObj, genNewSearchParamString } from '../../utils/functions';
import { getVans } from '../../api';
import Loading from '../../components/Loading/Loading';
import ErrorDetail from '../../components/ErrorDetail/ErrorDetail';

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
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function loadVans() {
            setIsLoading(true);
            try {
                const vans = await getVans();
                console.log(vans);
                setVans(vans);
            } catch (error) {
                console.error(error.message);
                setError(error as Error);
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

    const filterType = searchParams.get('type')?.toLocaleLowerCase();

    const displayedVans = filterType
        ? vans.filter(van => van.type === filterType)
        : vans;

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

    const vansElements = displayedVans && displayedVans.map(van => {
        return (
            <Link key={van.id} to={`${van.id}`} state={{ search: searchParams.toString() }}>
                <VanItem {...van} />
            </Link>
        )
    });

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