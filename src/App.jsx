// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DeliveryFlow from './components/DeliveryFlow';
import BaeminMain from './components/BaeminMain';
import AccessManagementScreen from './components/AccessManagementScreen';
import MyBaeminPage from './components/MyBaeminPage';
import SettingsPage from './components/SettingsPage';
import MyBaeminPageLogin from './components/MyBaeminPageLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* BaeminMain 대신 MyBaeminPageLogin을 기본 경로로 설정 */}
        <Route path="/" element={<MyBaeminPageLogin />} />
        
        {/* 기존 라우트들 유지 */}
        <Route path="/A" element={<DeliveryFlow />} />
        <Route path="/A/access" element={<AccessManagementScreen />} />
        
        <Route path="/B" element={<MyBaeminPage />} />
        <Route path="/B/1" element={<SettingsPage />} />
        <Route path="/B/2" element={<AccessManagementScreen />} />
        
        {/* 잘못된 경로는 홈으로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;