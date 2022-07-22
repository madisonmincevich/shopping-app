import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App" id="home">
      <Router>
        <div className="banner text-center p-1">
          FREE SHIPPING ON ORDERS OVER $200
        </div>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <Link to="/">
              <a className="navbar-brand" href="#home">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
            </Link>
            <h2 className="title me-5 ms-5">Fitness Website</h2>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-4">
                <li className="nav-item pe-5">
                  <Link to="/">
                    <a href="#product" className="me-5">
                      PRODUCTS
                    </a>
                  </Link>
                </li>
                <li className="nav-item pe-5">
                  <Link to="/blog">
                    <a href="#/blog" className="me-5 ms-5">
                      BLOG
                    </a>
                  </Link>
                </li>
                <li className="nav-item pe-5">
                  <Link to="/login">
                    <a href="#/login" className="userIcon  ms-5">
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                  </Link>
                </li>
                <li className="nav-item pe-5">
                  <Header />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
      <footer className="footer mt-4">
        <small className="credits">
          <a
            href="https://github.com/madisonmincevich/shopping-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source
          </a>{" "}
          code by{" "}
          <a
            href="https://maddiemincevich.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maddie Mincevich
          </a>
        </small>
        <div>
          <small className="footer-link">
            Icons and Pictures by{" "}
            <a
              href="https://icons8.com/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Icons8
            </a>{" "}
            and{" "}
            <a
              href="https://www.pexels.com/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
