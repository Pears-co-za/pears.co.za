import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Blog from './components/Blog';
import BlogEntry from './components/BlogEntry';
import PageNotFound from './components/pages/PageNotFound';


function App() {
    const blogs = [
        { id: 1, title: "Lorem ipsum dolor sit amet consectetur 1", image: "/assets/image-02.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe minus laboriosam cum modi ipsum expedita facere nam! Modi est consequuntur magni voluptates in." },
        { id: 2, title: "Lorem ipsum dolor sit amet consectetur 2", image: "/assets/image-02.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe minus laboriosam cum modi ipsum expedita facere nam! Modi est consequuntur magni voluptates in." },
        { id: 3, title: "Lorem ipsum dolor sit amet consectetur 2", image: "/assets/image-02.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe minus laboriosam cum modi ipsum expedita facere nam! Modi est consequuntur magni voluptates in." },
    ];

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog blogs={blogs} />} />
                <Route path="/blogs/:id" element={<BlogEntry blogs={blogs} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} /> {/* Catch-all route */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
