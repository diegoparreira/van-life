import React, { type ReactNode } from 'react';
import './Badge.css';

interface BadgeProps {
    pill?: boolean
    color?: string
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode
}

const Badge: React.FC<BadgeProps> = ({ pill = false, color = "main-color", size = "md", children }) => {
    const className = `badge ${` ${color} ${size}`}`

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Badge;