import React from "react";
import { motion } from "framer-motion";
import "../Hero/Hero_Free.css";

export default class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.firstValue = this.getRandomArbitraryStringPercent(44, 45);
    this.finalValue = this.getRandomArbitraryStringPercent(53, 54);
    this.duration = this.getRandomArbitraryNum(7, 10);
    this.Var = {
      animate: {
        width: [this.firstValue, this.finalValue, this.firstValue],
        transition: { duration: this.duration, repeat: Infinity },
      },
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    console.log(currentState);
    console.log("Hi");
  }
  getRandomArbitraryStringPercent(min, max) {
    let number = Math.random() * (max - min) + min;
    let stringed = String(number);
    let finishString = stringed.concat("%");
    return finishString;
  }
  getRandomArbitraryNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  render() {
    return (
      <motion.div
        id={"initialOne"}
        animate={"animate"}
        variants={this.Var}
        className={`thirdStep ${this.state.active ? "thirdStepLock" : ""}`}
        onClick={this.toggleClass}
      ></motion.div>
    );
  }
}
