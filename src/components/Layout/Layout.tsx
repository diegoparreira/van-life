import React from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <div className="layout-container">
            <Header />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;