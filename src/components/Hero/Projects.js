import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

import SassyLogo from "../images/logo.png";
import HtmlPersonalWebLogo from "../images/Bgtest2.jpeg";
import ReactWeb from "../images/ReactWeb.PNG";

function ProjectContainer() {
  const [AllVisible, setAllVisible] = useState(false);
  const [HtmlVisible, setHtmlVisible] = useState(true);
  const [ReactVisible, setReactVisible] = useState(false);
  const [headerIndex, setheaderIndex] = useState(1);

  const itemInitial = {
    initial: {
      opacity: 0,
      display: "none",
      position: "absolute",
      y: 200,
    },
    animate: {
      opacity: 1,
      display: "inline-block",
      position: "relative",
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
    exit: {
      transition: { duration: 0.3 },
      opacity: 0,
      y: 200,
    },
  };

  function changeAll() {
    setHtmlVisible(false);
    setReactVisible(false);
    setAllVisible(true);
    setheaderIndex(0);
  }

  function flipHtml() {
    setHtmlVisible(true);
    setReactVisible(false);
    setAllVisible(false);
    setheaderIndex(1);
  }

  function flipReact() {
    setReactVisible(true);
    setHtmlVisible(false);
    setAllVisible(false);
    setheaderIndex(2);
  }

  return (
    <div className={"slideContainer"}>
      <div className={"projects_Container"}>
        <div className={"projects_Nav"}>
          <button
            className={`${0 === headerIndex ? "button_active" : ""}`}
            onClick={changeAll}
          >
            All
          </button>
          <button
            className={`${1 === headerIndex ? "button_active" : ""}`}
            onClick={flipHtml}
          >
            Html
          </button>
          <button
            className={`${2 === headerIndex ? "button_active" : ""}`}
            onClick={flipReact}
          >
            React-Js
          </button>
        </div>
        <div className={"projects_Html"}>
          <AnimatePresence>
            {AllVisible && (
              <motion.div
                key={"item_four"}
                initial={"initial"}
                animate={"animate"}
                variants={itemInitial}
                exit={"exit"}
              >
                <ProjectItem
                  Description={`The first website I coded to introduce myself to the basics of Html, Java, and Css.`}
                  SubDescription={
                    " This website is something I view as an accomplishment and I will redevelop it with react components to finish the large modal problem I created"
                  }
                  ModalImageStyle={"modal_img_Sassy"}
                  Title={"Sassy's Specialty Sandwiches"}
                  Subtitle={"Family Sandwich Shop"}
                  Image={SassyLogo}
                  altTag={"Sassy's Specialty Sandwiches"}
                  ImageStyle={"contain"}
                  Link={
                    "https://christianrosa518.github.io/Sassy-s-Specialty-Sandwiches/"
                  }
                  GithubLink={
                    "https://github.com/ChristianRosa518/Sassy-s-Specialty-Sandwiches"
                  }
                ></ProjectItem>
              </motion.div>
            )}
            {AllVisible && (
              <motion.div
                key={"item_five"}
                initial={"initial"}
                animate={"animate"}
                variants={itemInitial}
                exit={"exit"}
              >
                <ProjectItem
                  Description={
                    "I tried to develop a personal website with the theme of Roses, I did poorly."
                  }
                  SubDescription={
                    "The idea was to change the color theme as you scrolled, from orange to blue to pink. "
                  }
                  ModalImageStyle={"modal_img"}
                  ImageStyle={"cover"}
                  Title={"Non-React Personal Web"}
                  Subtitle={"Yuck."}
                  Image={HtmlPersonalWebLogo}
                  altTag={"Personal Website Image"}
                  className={`projects_item ${HtmlVisible ? "" : "hidden"}`}
                  Link={"https://christianrosa518.github.io/pWebsite/"}
                  GithubLink={"https://github.com/ChristianRosa518/pWebsite"}
                ></ProjectItem>
              </motion.div>
            )}
            {AllVisible && (
              <motion.div
                key={"item_six"}
                initial={"initial"}
                animate={"animate"}
                variants={itemInitial}
                exit={"exit"}
              >
                <ProjectItem
                  Description={
                    "My First React app, I believe this website is folds more impressive than my previous. "
                  }
                  SubDescription={`Comparing these website's shows that my skills developed and that brings me a respectable sense of pride.`}
                  ModalImageStyle={"modal_img"}
                  ImageStyle={"cover"}
                  Title={"React Personal Web"}
                  Subtitle={"You're Currently on This"}
                  Image={ReactWeb}
                  altTag={"Personal Website Image"}
                  className={`projects_item ${HtmlVisible ? "" : "hidden"}`}
                  Link={""}
                  GithubLink={
                    "https://github.com/ChristianRosa518/react-personal-web"
                  }
                ></ProjectItem>
              </motion.div>
            )}
            {HtmlVisible && (
              <motion.div
                key={"item_one"}
                initial={"initial"}
                animate={"animate"}
                variants={itemInitial}
                exit={"exit"}
              >
                <ProjectItem
                  Description={`The first website I coded to introduce myself to the basics of Html, Java, and Css.`}
                  SubDescription={
                    " This website is something I view as an accomplishment and I will redevelop it with react components to finish the large modal problem I created"
                  }
                  ModalImageStyle={"modal_img_Sassy"}
                  Title={"Sassy's Specialty Sandwiches"}
                  Subtitle={"Family Sandwich Shop"}
                  Image={SassyLogo}
                  altTag={"Sassy's Specialty Sandwiches"}
                  ImageStyle={"contain"}
                  Sassy={true}
                  Link={
                    "https://christianrosa518.github.io/Sassy-s-Specialty-Sandwiches/"
                  }
                  GithubLink={
                    "https://github.com/ChristianRosa518/Sassy-s-Specialty-Sandwiches"
                  }
                ></ProjectItem>
              </motion.div>
            )}
            {HtmlVisible && (
              <motion.div
                key={"item_two"}
                initial={"initial"}
                animate={"animate"}
                variants={itemInitial}
                exit={"exit"}
              >
                <ProjectItem
                  Description={
                    "I tried to develop a personal website with the theme of Roses, I did poorly."
                  }
                  SubDescription={
                    "The idea was to change the color theme as you scrolled, from orange to blue to pink. "
                  }
                  ModalImageStyle={"modal_img"}
                  ImageStyle={"cover"}
                  Title={"Non-React Personal Web"}
                  Subtitle={"Yuck."}
                  Image={HtmlPersonalWebLogo}
                  altTag={"Personal Website Image"}
                  Link={"https://christianrosa518.github.io/pWebsite/"}
                  GithubLink={"https://github.com/ChristianRosa518/pWebsite"}
                  className={`projects_item ${HtmlVisible ? "" : "hidden"}`}
                ></ProjectItem>
              </motion.div>
            )}
            {ReactVisible && (
              <motion.div
                key={"item_three"}
                initial={"initial"}
                animate={"animate"}
                variants={itemInitial}
                exit={"exit"}
              >
                <ProjectItem
                  Description={
                    "My First React app, I believe this website is folds more impressive than my previous. "
                  }
                  SubDescription={`Comparing these website's shows that my skills developed and that brings me a respectable sense of pride.`}
                  ModalImageStyle={"modal_img"}
                  ImageStyle={"cover"}
                  Title={"React Personal Web"}
                  Subtitle={"You're Currently on This"}
                  Image={ReactWeb}
                  altTag={"Personal Website Image"}
                  Link={""}
                  GithubLink={
                    "https://github.com/ChristianRosa518/react-personal-web"
                  }
                  className={`projects_item ${HtmlVisible ? "" : "hidden"}`}
                ></ProjectItem>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      modals: false,
    };
    this.changeModal = this.changeModal.bind(this);
  }

  changeModal(e) {
    const current = this.state.modals;
    this.setState({ modals: !current });
  }

  changeModalChildElement(e) {
    e.stopPropagation();
    console.log("child");
  }

  render() {
    return (
      <div>
        {/* Modal */}
        <AnimatePresence>
          {this.state.modals && (
            <motion.div
              key={"Modal"}
              initial={{ height: 0 }}
              animate={{ height: "calc(var(--vh, 1vh) * 100)" }}
              transition={{ duration: 0.5 }}
              exit={{ height: "0vh", transition: { duration: 0.5 } }}
              onClick={this.changeModal}
              className={"modal_Container"}
            >
              <div className={"modal"} onClick={this.changeModalChildElement}>
                <div className={"closeButton"} onClick={this.changeModal}>
                  ✖
                </div>
                <div className={this.props.ModalImageStyle}>
                  <img
                    className={this.props.ImageStyle}
                    src={this.props.Image}
                    alt={this.props.altTag}
                  ></img>
                  <div>
                    <h2 className={"modalTitle"}>{this.props.Title}</h2>
                    <p className={"modalSubTitle"}>{this.props.Subtitle}</p>
                  </div>
                  <div>
                    <p className={"modalDescription"}>
                      {this.props.Description}
                    </p>
                    <p className={"modalDescription modalSub"}>
                      {this.props.SubDescription}
                    </p>
                  </div>
                  <div className={"modalButtonContainer"}>
                    <a
                      href={this.props.Link}
                      className={"modalButton"}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      Website
                    </a>
                    <a
                      href={this.props.GithubLink}
                      className={"modalButton"}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Item */}
        <div
          className={"projects_item"}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <AnimatePresence>
            {this.state.hover && (
              <motion.div
                key={"Project"}
                initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                animate={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                transition={{ transition: 0.2, duration: 0.2 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className={"projects_Hover"}
              >
                <motion.h2
                  key={"Project2"}
                  initial={{ opacity: 0, y: -120 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className={"projects_item_Title"}
                >
                  {this.props.Title}
                </motion.h2>
                <motion.button
                  onClick={this.changeModal}
                  key={"Project3"}
                  initial={{ opacity: 0, y: 120 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className={"projects_item_Button"}
                >
                  {" "}
                  Learn More
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            className={this.props.ImageStyle}
            src={this.props.Image}
            alt={this.props.altTag}
          ></img>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
