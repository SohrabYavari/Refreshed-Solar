import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

// Components Imported
import Navbar from "./Global/Navbar";
import { Container } from "@mui/material";
import HomePage from "./Modules/Home/HomePage";
import AboutPage from "./Modules/About/AboutPage";
import ForHousesPage from "./Modules/ForHouses/ForHousesPage";
import ForBusinessesPage from "./Modules/ForBusinesses/ForBusinessesPage";
import ContactPage from "./Modules/Contact/ContactPage";
import Footer from "./Global/Footer";


function App() {

  return (
    <div className="App">
      <Container>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/RefreshedSolar" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/ForHouses" element={<ForHousesPage />} />
            <Route path="/ForBusinesses" element={<ForBusinessesPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
