
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsappButton";
// import ModelPortfolioLanding from "./pages/ModelPortfolioLanding";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton/>
      {/* <ModelPortfolioLanding/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
