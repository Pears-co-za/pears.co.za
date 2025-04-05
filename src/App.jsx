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
    const users = [
        {
            userId: 1,
            firstName: 'Bongiwe',
            lastName: 'Sibanda',
            profilePicture: "/assets/Ellipse_2.png",
            posts: [
                {
                    id: 1,
                    title: "Welcome to Pears: Growing Digital Solutions with a Human Touch",
                    image: "/assets/Rectangle-56.png",
                    content: "Hello, and welcome!\n\nI’m Bongi, Managing Director of Pears, or, as the team calls me, the “Queen B.” It’s a title I hold with pride and a little humor—it reflects my love for creativity and my passion for leading a team that’s as close-knit and industrious as a hive. I wanted Pears to be more than just another IT solutions company. I wanted it to feel different, to have a personality, and to be inspired by nature in a way that reminds us of the power of collaboration and growth.\n\n<span>The Story Behind Pears and Bees</span>\n\nYou might wonder, Why “Pears”? The name is more than just a word; it’s a symbol of everything we strive to create here. Just like how bees pollinate flowers so they can bear fruit, our team works together to cultivate digital solutions that are as impactful and beautiful as nature itself. Every project we take on is treated like a flower in bloom, nurtured by our team’s expertise, creativity, and care. Just as a pear grows and matures, so do the solutions we create—designed to grow with your business and flourish over time.\n\n<span>A Different Kind of IT Company</span>\n\nWhen I started Pears, I wanted it to be rooted in creativity, driven by a different approach. Technology should feel human, adaptable, and intuitive. My background as a creative thinker has always influenced my work, and at Pears, I’ve brought that approach to every project. Our hive isn’t just a team of developers, designers, and consultants—it’s a community of people who are dedicated to crafting meaningful, lasting solutions. And, like a hive, each member has a unique role that contributes to the bigger picture.\n\n<span>Our Collaborative Approach: Bees at Work</span>\n\nAt Pears, every member of the team, every “bee,” plays an important part. From consultation to completion, we work in sync, combining our skills and perspectives to build solutions that resonate. Our work process emphasizes collaboration because I believe that when great minds work together, the results are more than just “products”—they’re solutions with purpose and heart. Whether we’re designing user experiences, developing applications, or managing projects, our work is about more than meeting a checklist. It’s about delivering IT solutions that truly serve, grow, and thrive.\n\n<span className={styles.post__headings}>What You Can Expect from Pears</span>\n\nClients often tell us they feel like part of the hive when working with us, and that’s exactly the environment we strive to create. At Pears, you’re not just another client; you’re a partner in our mission to build technology that feels intuitive, sustainable, and—most importantly—tailored to your unique needs. Our goal is to create solutions that grow with you, just like a tree bearing fruit, adapting as your business evolves.\n\n<span className={styles.post__headings}>Looking Ahead: Let’s Grow Something Great Together</span>\n\nI’m grateful you’re here to explore what Pears has to offer. We’re a team driven by innovation and a genuine love for what we do. If you’re looking for an IT partner with a creative, human touch, I invite you to join us on this journey. Let’s work together to bring your vision to life—one that’s built to last, just like a pear tree nurtured by the bees that help it flourish.\n\nWelcome to the Hive. Welcome to Pears. Let’s grow something beautiful together.\n\nWith gratitude, Bongi,\nManaging Director\n\n",
                    uploadDate: "14th of April 2025",
                    timeToRead: "3 min",
                },
            ]
        },
    ];

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog users={users} />} />
                <Route path="/blogs/:userId/:id" element={<BlogEntry users={users} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} /> {/* Catch-all route */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
