import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyFooter from 'react-sticky-footer';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/index.html" component={About} />
          <Route exact path="/portfolio.html" component={Portfolio} />
          <Route exact path="/contact.html" component={Contact} />
        </Switch>
      </div>
      <StickyFooter>
        <Footer />
      </StickyFooter>
    </Router>
  );
}

export default App;