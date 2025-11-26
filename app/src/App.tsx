import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlannerLayout from './layouts/PlannerLayout';
import ClientLayout from './layouts/ClientLayout';
import PlannerDashboard from './pages/planner/Dashboard';
import ClientHome from './pages/client/Home';
import Schedule from './pages/client/Schedule';
import Menu from './pages/client/Menu';
import Seating from './pages/client/Seating';
import Photos from './pages/client/Photos';
import SuppliersList from './pages/planner/SuppliersList';
import Checklist from './pages/planner/Checklist';
import ClientsList from './pages/planner/ClientsList';
import Calendar from './pages/planner/Calendar';
import Settings from './pages/planner/Settings';
import ClientDashboard from './pages/client/Dashboard';
import GuestManager from './pages/client/GuestManager';
import BudgetTracker from './pages/client/BudgetTracker';
import ClientChecklist from './pages/client/ClientChecklist';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Planner Routes */}
                <Route path="/planner" element={<PlannerLayout />}>
                    <Route index element={<PlannerDashboard />} />
                    <Route path="clients" element={<ClientsList />} />
                    <Route path="suppliers" element={<SuppliersList />} />
                    <Route path="checklist" element={<Checklist />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Client Routes (Bride & Guest) */}
                <Route path="/client/:clientId" element={<ClientLayout />}>
                    {/* Bride Planning Routes */}
                    <Route index element={<ClientDashboard />} />
                    <Route path="guests" element={<GuestManager />} />
                    <Route path="budget" element={<BudgetTracker />} />
                    <Route path="checklist" element={<ClientChecklist />} />

                    {/* Guest Routes */}
                    <Route path="guest" element={<ClientHome />} />
                    <Route path="guest/schedule" element={<Schedule />} />
                    <Route path="guest/menu" element={<Menu />} />
                    <Route path="guest/seating" element={<Seating />} />
                    <Route path="guest/photos" element={<Photos />} />
                </Route>

                {/* Default Redirect */}
                <Route path="/" element={<Navigate to="/planner" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
