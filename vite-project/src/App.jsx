import React from 'react'
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route path="/work/:id" element={<PortfolioItem />} />
      </Routes>
      <About />
      <Services />
      <Work />
      <Footer />
    </BrowserRouter>
   
    )
}

export default App 