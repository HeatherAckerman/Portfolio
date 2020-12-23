import React from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyFooter from 'react-sticky-footer';
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Skills from "./components/Skills";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <StickyFooter>
        <Footer />
      </StickyFooter>
    </>
  );
}

export default App;