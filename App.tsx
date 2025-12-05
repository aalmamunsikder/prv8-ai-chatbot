import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './src/contexts/AuthContext';
import { LandingPage } from './src/pages/LandingPage';
import { AuthPage } from './src/pages/AuthPage';
import { ThemeDebugger } from './components/ui/ThemeDebugger';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ThemeDebugger />
      </Router>
    </AuthProvider>
  );
};

export default App;