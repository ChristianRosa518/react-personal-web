import React from "react";
import { motion } from "framer-motion";
import "../Hero/Hero_Free.css";

export default class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className={"step"}>
        <div
          className={`initialStep ${
            this.state.active ? "initialStepLock" : ""
          }`}
          onClick={this.toggleClass}
        ></div>
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        <FourthStep />
        <FifthStep />
        <SixthStep />
      </div>
    );
  }
}

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.firstValue = this.getRandomArbitraryStringPercent(75, 80);
    this.finalValue = this.getRandomArbitraryStringPercent(90, 95);
    this.duration = this.getRandomArbitraryNum(7, 10);
    this.firstVar = {
      animate: {
        width: [this.firstValue, this.finalValue, this.firstValue],
        transition: { duration: this.duration, repeat: Infinity },
      },
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
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
        variants={this.firstVar}
        className={`firstStep ${this.state.active ? "firstStepLock" : ""}`}
        onClick={this.toggleClass}
      ></motion.div>
    );
  }
}

class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.firstValue = this.getRandomArbitraryStringPercent(55, 58);
    this.finalValue = this.getRandomArbitraryStringPercent(70, 74);
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
        className={`secondStep ${this.state.active ? "secondStepLock" : ""}`}
        onClick={this.toggleClass}
      ></motion.div>
    );
  }
}

class ThirdStep extends React.Component {
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

class FourthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.firstValue = this.getRandomArbitraryStringPercent(33, 37);
    this.finalValue = this.getRandomArbitraryStringPercent(39, 43);
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
        className={`fourthStep ${this.state.active ? "fourthStepLock" : ""}`}
        onClick={this.toggleClass}
      ></motion.div>
    );
  }
}

class FifthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.firstValue = this.getRandomArbitraryStringPercent(14, 23);
    this.finalValue = this.getRandomArbitraryStringPercent(24, 32);
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
        className={`fifthStep ${this.state.active ? "fifthStepLock" : ""}`}
        onClick={this.toggleClass}
      ></motion.div>
    );
  }
}
class SixthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.firstValue = this.getRandomArbitraryStringPercent(3, 5);
    this.finalValue = this.getRandomArbitraryStringPercent(6, 13);
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
        className={`sixthStep ${this.state.active ? "sixthStepLock" : ""}`}
        onClick={this.toggleClass}
      ></motion.div>
    );
  }
}
