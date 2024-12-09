import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import Register from './components/Register';
import Login from './components/Login';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
