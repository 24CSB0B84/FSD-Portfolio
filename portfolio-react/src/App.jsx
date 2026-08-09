import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  /* ── State: dark / light theme ── */
  const [theme, setTheme] = useState(() => {
    // Read persisted theme from localStorage on initial load
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  /* ── useEffect #1: Persist theme to localStorage whenever it changes ── */
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  /* ── Toggle handler ── */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Shared layout: Navbar + Outlet + Footer */}
        <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/projects/:projectId" element={<ProjectDetail theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
