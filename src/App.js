import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import ServicesPage from './Pages/Services/ServicesPage';
function App() {
  return (
    <Router basename="/react-fronEnd-1">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<ServicesPage />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;