import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Header from './layouts/header/Header.jsx';
import Home from './pages/home/Home.jsx';

function App() {
  return (
      <Router>
        <div className='main_container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>      
        </div>
      </Router>
  );
}

export default App;
