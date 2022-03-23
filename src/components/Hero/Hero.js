import React from "react";
import classes from "./Hero.module.css";
import Carous from "../Carousel/Carous";
import InitialStep from "../Steps/InitialStep";

function Hero() {
  return (
    <div className={classes.home}>
      <Carous />
      <div className={classes.absolute}>
        <InitialStep />
        <InitialStep />
        <InitialStep />
        <InitialStep />
        <InitialStep />
        <InitialStep />
        <InitialStep />
        <InitialStep />
        <InitialStep />

        {/* Nine as default */}
      </div>
    </div>
  );
}

export default Hero;
