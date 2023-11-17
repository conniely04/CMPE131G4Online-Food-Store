import React from 'react';
import { Link } from 'react-router-dom';
import '../M-CSS/ManagersSidebar.css';

const ManagersSidebar = () => {
    return (
        <div className="managers-sidebar">
            <Link to="/ManagerMainPage/dashboard">Dashboard</Link>
            <Link to="/ManagerMainPage/product-management">Product Management</Link>
            <Link to="/ManagerMainPage/order-management">Order Management</Link>
            <Link to="/ManagerMainPage/user-management">User Management</Link>
            {/* Add more links as needed */}
        </div>
    );
};

export default ManagersSidebar;
