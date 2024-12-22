import React from 'react';
import { Routes, Route } from 'react-router';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Info from './pages/Info';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services">
          <Route path="tech-consulting" element={<Service />} />
          <Route path="software-development" element={<Service />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="privacy-policy" element={<Info />} />
        <Route path="terms-and-conditions" element={<Info />} />
        <Route path="legal-notice" element={<Info />} />
      </Route>
    </Routes>
  )
}

export default App;