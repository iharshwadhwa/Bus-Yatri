import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Dashboard/main';
import BusList from './pages/Buses/BusList';
import AddBusList from './pages/AddBus/addBuses';
import UserDataPage from './pages/profile/UserDataPage';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set authentication status based on token presence
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to dashboard if authenticated */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Main /> } />
        <Route path="/buses" element={<BusList /> } />
        <Route path="/addbuses" element={<AddBusList /> } />
        <Route path="/profile" element={ <UserDataPage />} />
        {/* Default Route (Redirect to Login) */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
