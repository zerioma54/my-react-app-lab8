import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Contact from "./pages/Contact";
import Messages from "./pages/Messages";
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
    useEffect(() => {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light"? "dark" : "light"));
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} currentTheme={theme}/>

      <main className="main-content">

      <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>

      </main>  
     

      <Footer />
    </Router>
    
    
  );
}

export default App;
