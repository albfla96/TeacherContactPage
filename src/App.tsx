import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './components/homePage/HomePage';
import Gherla from './components/gherla/Gherla';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/gherla" element={<Gherla/>}/>
      </Routes>
    </Router>
  );
}

export default App;
