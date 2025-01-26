import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HealthTracking from './pages/HealthTracking';
import AIAnalysis from './pages/AIAnalysis';
import ExpertCare from './pages/ExpertCare';
import DietPlans from './pages/DietPlans';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import LearnMore from './pages/LearnMore';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Features />
                <Testimonials />
              </main>
            }
          />
          <Route path="/health-tracking" element={<HealthTracking />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/ai-analysis/learn-more" element={<LearnMore />} />
          <Route path="/expert-care" element={<ExpertCare />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;