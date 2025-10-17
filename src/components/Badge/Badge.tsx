import React, { type ReactNode } from 'react';
import './Badge.css';

interface BadgeProps {
    pill?: boolean
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ pill = false, size = "md", className = 'main-color', children }) => {
    const classNameStr = `badge ${`${size} ${className}`}`;

    return (
        <div className={classNameStr} >
            {children}
        </div>
    );
};

export default Badge;