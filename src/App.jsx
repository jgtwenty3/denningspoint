import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from "./components/Hero";
import Footer from './components/Footer';
import Intro from './components/Intro';
import BottleList from './components/BottleList';
import About from './pages/About';
import Spirits from './pages/Spirits';
import Cocktails from './pages/Cocktails';
import Services from './pages/Services';
import Visit from './pages/Visit';
import Buy from './pages/Buy';

function App() {
  return (
    <Router>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero backgroundImage="/images/home.jpg" logoImage="/images/logo.png" animationDuration={6} />
              <Intro />
              <BottleList />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/spirits" element={<Spirits />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
