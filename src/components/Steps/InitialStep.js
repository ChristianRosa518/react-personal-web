import React from "react";
import "../Hero/Hero_Free.css";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";

export default class InitialStep extends React.Component {
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
    console.log(currentState);
    console.log("Hi");
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
