
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WorkflowPage } from './pages/WorkflowPage';
import { ArrowUp } from 'lucide-react';

const Layout = ({ theme, toggleTheme, scrollToTop, showScrollTop }: any) => (
  <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-300 relative">
    <Header theme={theme} toggleTheme={toggleTheme} />
    <main>
      <Outlet />
    </main>
    <Footer theme={theme} toggleTheme={toggleTheme} />
    <AiAssistant />
    
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-8 z-[90] p-4 rounded-full bg-slate-900 dark:bg-blue-600 text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] border-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-125 hover:-translate-y-2 active:scale-90 group transform-gpu ${
        showScrollTop ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-20 translate-x-4 pointer-events-none'
      }`}
      aria-label="Scroll to top of page"
    >
      <ArrowUp size={24} className="group-hover:animate-subtle-bounce" />
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
    </button>
  </div>
);

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const HomeSections = () => (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} scrollToTop={scrollToTop} showScrollTop={showScrollTop} />}>
          <Route index element={<HomeSections />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="workflow" element={<WorkflowPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Ensure the imports for pages are added here (I will do that via multi_edit or just fix imports)

export default App;
