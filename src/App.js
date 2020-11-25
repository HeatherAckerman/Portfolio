import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
    return (
      <Router>
        <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/index.html" component={Home} />
              <Route exact path="/portfolio.html" component={Portfolio} />
              <Route exact path="/contact.html" component={Contact} />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;