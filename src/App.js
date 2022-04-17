import React from "react";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }

  window.addEventListener("resize", appHeight);
  appHeight();

  document.body.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  return (
    <Router>
      <Hero />
      <Navbar />
    </Router>
  );
}

export default App;
