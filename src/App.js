import React from "react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import "./App.css";
import "./css/default.css";
import "./css/layout.css";
import "./css/media-queries.css";
import "./css/magnific-popup.css";
import "./css/font-awesome/css/font-awesome.css";
import "./css/font-awesome/css/font-awesome.min.css";
import "./css/fontello/css/animation.css";
import "./css/fontello/css/fontello.css";
import "./css/fontello/css/fontello-codes.css";
import "./css/fontello/css/fontello-embedded.css";
import "./css/fontello/css/fontello-ie7.css";
import "./css/fontello/css/fontello-ie7-codes.css";


const App = () => (
  <React.Fragment>
    <Header />
    <section id="about">
      <About />
    </section>
    <section id="resume">
      <Resume />
    </section>
    <section id="portfolio">
      <Project />
    </section>
  </React.Fragment>
);

export default App;
