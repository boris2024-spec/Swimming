import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Register from './pages/Register.jsx';
import Gallery from './pages/Gallery.jsx';
import Schedule from './pages/Schedule.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
import Coaches from './pages/Coaches.jsx';
import Programs from './pages/Programs.jsx';
import FAQPage from './pages/FAQPage.jsx';
import { getTheme } from './theme.js';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
  }), []);

  const cacheRtl = useMemo(() => createCache({ key: 'mui-rtl', stylisPlugins: [prefixer, rtlPlugin] }), []);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <CacheProvider value={cacheRtl}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/coaches" element={<Coaches />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default App;