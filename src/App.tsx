import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy loading komponentów
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const VehiclesList = React.lazy(() => import('./pages/vehicles/VehiclesList'));
const AddVehicle = React.lazy(() => import('./pages/vehicles/AddVehicle'));
const VehicleDetails = React.lazy(() => import('./pages/vehicles/VehicleDetails'));
const OrdersList = React.lazy(() => import('./pages/orders/OrdersList'));
const AddOrder = React.lazy(() => import('./pages/orders/AddOrder'));
const OrderDetails = React.lazy(() => import('./pages/orders/OrderDetails'));

const App = () => {
  return (
    <Router>
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/add" element={<AddVehicle />} />
            <Route path="/vehicles/:id" element={<VehicleDetails />} />
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/add" element={<AddOrder />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
          </Routes>
        </React.Suspense>
      </Layout>
    </Router>
  );
};

export default App;