import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Header from './layouts/header/Headerr.jsx';
import Footer from './layouts/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Error from './pages/error/Error.jsx';

function App() {
  return (
      <Router>
        <div className='main_container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />           
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>      
        </div>
        <div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App
