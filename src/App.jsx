// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DeliveryFlow from './components/DeliveryFlow';
import BaeminMain from './components/BaeminMain';
import AccessManagementScreen from './components/AccessManagementScreen'; 
import MyBaeminPage from './components/MyBaeminPage';
import SettingsPage from './components/SettingsPage';
import TestPage from './components/TestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaeminMain />} />
        <Route path="/A">
          <Route index element={<DeliveryFlow />} />
          <Route path="access" element={<AccessManagementScreen />} />
        </Route>
        <Route path="/B">
          <Route index element={<MyBaeminPage />} />
          <Route path="1" element={<SettingsPage />} />
          <Route path="2" element={<AccessManagementScreen />} />
          <Route path="123" element={<TestPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;