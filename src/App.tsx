import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PesticideEffects from './pages/PesticideEffects';
import PhTesting from './pages/PhTesting';
import Fertilizer from './pages/Fertilizer';
import ExpertHelp from './pages/ExpertHelp';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pesticide-effects" element={<PesticideEffects />} />
            <Route path="/ph-testing" element={<PhTesting />} />
            <Route path="/fertilizer" element={<Fertilizer />} />
            <Route path="/expert-help" element={<ExpertHelp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;