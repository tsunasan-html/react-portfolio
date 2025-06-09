import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Home from './pages/Home';

import AppHeader from './component/AppHeader';
import Footer from './component/Footer'; 
import Works01 from './pages/works/Works01';
import Works02 from './pages/works/Works02';
import NotFound from "./component/NotFound"; 

import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isAboutPage = location.pathname === "/about/";
  const isWorksPage = location.pathname === "/works/";
  const isContactPage = location.pathname === "/contact/";
  const isWorks01Page = location.pathname === "/works01/";
  const isWorks02Page = location.pathname === "/works02/";

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/works/" element={<Works />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/works01/" element={<Works01 />} />
        <Route path="/works02/" element={<Works02 />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      {isAboutPage && <Footer />}
      {isWorksPage && <Footer />}
      {isContactPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
