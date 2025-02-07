import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HealthTracking from "./pages/HealthTracking";
import AIAnalysis from "./pages/AIAnalysis";
import ExpertCare from "./pages/ExpertCare";
import DietPlans from "./pages/DietPlans";
import AuthPage from "./pages/Auth/AuthPage";
import LearnMore from "./pages/LearnMore";
import ReturnToTop from "./components/ReturnToTop";
import MouseFollower from "./components/MouseFollower";
import Profile from "./pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user details

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const parts = token.split(".");
        if (parts.length !== 3) throw new Error("Invalid token format");
  
        const tokenData = JSON.parse(atob(parts[1])); 
        const isExpired = tokenData.exp * 1000 < Date.now();
  
        if (isExpired) {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    }
  }, [isAuthenticated]); // Added dependency
  

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <MouseFollower />
        <Header user={user} isAuthenticated={isAuthenticated} />
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
          
          {/* Pass setIsAuthenticated to AuthPage */}
          <Route path="/auth" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />

          <Route path="/login" element={<Navigate to="/auth" />} />
          <Route path="/signup" element={<Navigate to="/auth" state={{ isSignUp: false }} />} />

          {/* Protect Profile Page & Pass User Data */}
          <Route path="/profile" element={isAuthenticated ? <Profile user={user} setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/auth" />} />
        </Routes>
        <Footer />
        <ReturnToTop />
      </div>
    </Router>
  );
}

export default App;
