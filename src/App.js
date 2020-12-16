import React from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyFooter from 'react-sticky-footer';
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact/>
      <StickyFooter>
        <Footer />
      </StickyFooter>
    </>
  );
}

export default App;