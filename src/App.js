import React from "react";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

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
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
