import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import BlogPage from './Components/BlogPage/src/BlogPage';
import CareersPage from './Components/CareerPage/Career';
import TechPage from './Components/TechPage/TechPage';

function App() {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<CareersPage/>} />
          <Route path="/tech" element={<TechPage/>} />
          <Route path="/blog/*" element={<BlogPage />} /> {/* Use `/*` for nested routes */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
