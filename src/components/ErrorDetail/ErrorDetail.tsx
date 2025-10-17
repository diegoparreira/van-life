import React from 'react';
import './ErrorDetail.css';

interface ErrorDetailProps {
    error: any
}

const ErrorDetail: React.FC<ErrorDetailProps> = ({ error }) => {
    return (
        <div className="errordetail">
            <h2>An error ocurred</h2>
            <p>{error.message}</p>
            <p>{error.statusText}</p>
            <p>{error.status}</p>
        </div>
    );
};

export default ErrorDetail;