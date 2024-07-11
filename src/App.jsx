import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/homepage/HomePage';
import { CountryPage } from './pages/countrypage/CountryPage';
import Layout from './components/Layout';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme}/>}>
          <Route index element={<HomePage />} />
          <Route path="/country/:cca3" element={<CountryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;