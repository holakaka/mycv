import { useState } from "react";

const Nav = function Nav() {
  const [navbar, setNavbar] = useState("home");

  const changeColor = () => {
    if (window.scrollY >= 400 && window.scrollY < 1100) {
      setNavbar("about");
    } else if (window.scrollY >= 1100 && window.scrollY < 2200) {
      setNavbar("resume");
    } else if (window.scrollY >= 2200) {
      setNavbar("portfolio");
    } else setNavbar("home");
  };
  window.addEventListener("scroll", changeColor);
  return (
    <nav id="nav-wrap" className="opaque">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li>
          <a
            className="main"
            href="#home"
            style={navbar == "home" ? { color: "#F06000" } : { color: "white" }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="main"
            href="#about"
            style={navbar == "about" ? { color: "#F06000" } : { color: "white" }}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="main"
            href="#resume"
            style={navbar == "resume" ? { color: "#F06000" } : { color: "white" }}
          >
            Resume
          </a>
        </li>

        <li>
          <a
            className="main"
            href="#portfolio"
            style={navbar == "portfolio" ? { color: "#F06000" } : { color: "white" }}
          >
            Project
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Div = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Dang Ngoc Khang.</h1>
      <h3>
        I'm currently a senior student of <span>Information Technology</span> at {" "}
        <span> <br></br> Sai Gon University.</span> I have a passion for coding. Let's{" "}
        <a className="main" href="#about">
          start scrolling {" "}
        </a>
        and learn more{" "}
        <a className="main" href="#about">
          about me
        </a>
        .
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/khang.ngoc.3914/" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/holakaka" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/khang-%C4%91%E1%BA%B7ng-ng%E1%BB%8Dc-559101228/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      

      </ul>
    </div>
  </div>
);

const Header = () => (
  <header id="home">
    <Nav />
    <Div />
  </header>
);

export default Header;
