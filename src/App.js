import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
function App() {
  return (
    <Router basename="/react-fronEnd-1">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing/> } />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;