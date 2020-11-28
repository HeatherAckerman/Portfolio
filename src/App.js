import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";


function App() {
    return (
      <Router>
        <div>
            <Header />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/index.html" component={About} />
              <Route exact path="/portfolio.html" component={Portfolio} />
              <Route exact path="/contact.html" component={Contact} />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;