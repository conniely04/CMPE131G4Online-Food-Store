import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagersSidebar from '../ManagersPages/ManagersSidebar';
import Dashboard from '../ManagersPages/Dashboard';
import ProductManagement from '../ManagersPages/ProductManagement';
import OrderManagement from '../ManagersPages/OrderManagement';
import UserManagement from '../ManagersPages/UserManagement';
// import other manager components

function ManagerMainPage() {
    return (
        <div className="manager-container">
            <ManagersSidebar />
            <div className="manager-content">
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="product-management" element={<ProductManagement />} />
                    <Route path="order-management" element={< OrderManagement />} />
                    <Route path="user-management" element={<UserManagement/>} />
                    {/* other manager routes */}
                </Routes>
            </div>
        </div>
    );
}

export default ManagerMainPage;
