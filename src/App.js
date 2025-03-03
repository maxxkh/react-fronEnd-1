import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
function App() {
  return (
    <Router basename="/react-fronEnd-1">
      <Layout>
        <Routes>
          <Route index  path="/" element={<Home />} />
          <Route path="/react-fronEnd-1/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;