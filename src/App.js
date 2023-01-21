import Home from './pages/Home';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './Components/Reusable/NavMenu';
import Footer from './Components/Reusable/Footer';
import BackToTop from './Components/Reusable/BackToTop'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyle';


function App() {

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BackToTop />
      <Router>
        <NavMenu themeToggler={themeToggler} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <br />
        <Footer />
      </Router>
    </ThemeProvider >

  );
}

export default App;
