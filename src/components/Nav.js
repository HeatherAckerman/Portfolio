import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <div>
      <nav ClassName="navbar navbar-light">
        <nav ClassName="navbar navbar-expand-lg navbar-light">
          <a ClassName="navbar-brand" href="#">Heather Ackerman</a>
          <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span ClassName="navbar-toggler-icon"></span>
          </button>
          <div ClassName="collapse navbar-collapse" ClassName="nav justify-content-end" id="navbarNavAltMarkup">
            <div ClassName="navbar-nav">
              <a ClassName="nav-link active" href="index.html">About</a>
              <a ClassName="nav-link" href="portfolio.html">Portfolio</a>
              <a ClassName="nav-link" href="contact.html">Contact</a>
            </div>
          </div>
        </nav>
      </nav>
      <div ClassName="bg"></div>
    </div>
  );
}

export default Nav;