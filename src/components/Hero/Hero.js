import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Title.css";
import "./About.css";
import "../Carousel/imageCarousel.css";
import "./Projects.css";

import Step from "../Steps/Step";
import ImageCarousel, { CarouselChild } from "../Carousel/ImageCarousel";
import CarouselContainer, { CarouselItem } from "../Carousel/Carousel";
import ProjectContainer from "./Projects";

// Images
import image1 from "../images/CarouselImages/image1.PNG";
import image2 from "../images/CarouselImages/image2.JPG";
import image3 from "../images/CarouselImages/image3.JPG";
import image4 from "../images/CarouselImages/image4.jpg";
import image5 from "../images/CarouselImages/image5.JPG";
import image6 from "../images/CarouselImages/image6.jpg";
import image7 from "../images/CarouselImages/image7.JPG";
import image8 from "../images/CarouselImages/image8.JPG";
import image9 from "../images/CarouselImages/image9.JPG";
import image10 from "../images/CarouselImages/image10.PNG";
import image11 from "../images/CarouselImages/image11.JPG";
import image12 from "../images/CarouselImages/image12.jpg";
import image13 from "../images/CarouselImages/image13.jpg";
import image15 from "../images/CarouselImages/image15.PNG";
import image16 from "../images/CarouselImages/image16.jpg";
import image17 from "../images/CarouselImages/imagr17.jpg";
import image18 from "../images/CarouselImages/image18.jpg";
// Images Done

function Hero() {
  const [intro, setIntro] = useState(true);
  const [introtwo, setIntrotwo] = useState(true);
  const [introthree, setIntrothree] = useState(false);
  const [introfour, setIntrofour] = useState(false);
  setTimeout(() => {
    setIntro(false);
  }, 3000);

  setTimeout(() => {
    setIntrotwo(false);
  }, 2300);

  setTimeout(() => {
    setIntrothree(true);
    setIntrofour(true);
  }, 4500);
  return (
    <div className={"home"}>
      <CarouselContainer>
        <CarouselItem>
          <div className={"titleContainer"}>
            <AnimatePresence>
              {intro && (
                <motion.div
                  key={"intro1"}
                  initial={{ x: "-8%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  className={"title"}
                  exit={{ x: "-20%", opacity: 0 }}
                >
                  hello,
                </motion.div>
              )}

              {introtwo && (
                <motion.div
                  key={"intro2"}
                  initial={{ x: "-8%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut", delay: 1.1 }}
                  className={"titlebot"}
                  exit={{ x: "-20%", opacity: 0 }}
                >
                  welcome to my website
                </motion.div>
              )}
            </AnimatePresence>
            {introthree && (
              <motion.div
                initial={{ x: "-8%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={"title"}
                exit={{ x: "-20%", opacity: 0 }}
              >
                I'm Christian Rosa
              </motion.div>
            )}
            {/* Why did i need to make two tags when I could've used one?? yucky */}
            {introfour && (
              <motion.div
                initial={{ x: "-10%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut", delay: 1 }}
                className={"titlebot"}
                exit={{ x: "-20%", opacity: 0 }}
              >
                and i'm an aspiring Front-end Developer
              </motion.div>
            )}
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className={"slideContainer"}>
            <div className={"aboutContainer"}>
              <div className={"aboutImage"}>
                <ImageCarousel>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageFill"}
                      src={image1}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow "} src={image2} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow"} src={image3} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow "} src={image6} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow"} src={image4} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow"} src={image7} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageCover"}
                      src={image5}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageDown"}
                      src={image8}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageDown"}
                      src={image9}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageCover"}
                      src={image13}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow"} src={image10} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow "}
                      src={image11}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageCover "}
                      src={image12}
                      alt="selfie1"
                    />
                  </CarouselChild>

                  <CarouselChild>
                    <img className={"noOverflow"} src={image15} alt="selfie1" />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow "}
                      src={image16}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img
                      className={"noOverflow imageCover"}
                      src={image17}
                      alt="selfie1"
                    />
                  </CarouselChild>
                  <CarouselChild>
                    <img className={"noOverflow"} src={image18} alt="selfie1" />
                  </CarouselChild>
                </ImageCarousel>
              </div>
              <div className={"description_Container"}>
                <div className={"description_AboutSection"}>
                  <h2>Who am I?</h2>
                  <p>
                    I'm an Associate level College graduate pursuing a career in
                    front-end development
                  </p>
                </div>
                <div className={"description_SkillSection"}>
                  <h3>Languages I know</h3>

                  <div className={"bars_Container"}>
                    <div className={"percent_Bars"}>
                      <div className={"description_Skill"}>Html</div>
                      <div
                        className={"description_Bar"}
                        style={{ width: "70%" }}
                      ></div>
                      <div className={"description_Percent"}>70%</div>
                    </div>
                    <div className={"percent_Bars"}>
                      <div className={"description_Skill"}>Css</div>
                      <div
                        className={"description_Bar"}
                        style={{ width: "50%" }}
                      ></div>
                      <div className={"description_Percent"}>50%</div>
                    </div>
                    <div className={"percent_Bars"}>
                      <div className={"description_Skill"}>JavaScript</div>
                      <div
                        className={"description_Bar"}
                        style={{ width: "40%" }}
                      ></div>

                      <div className={"description_Percent"}>40%</div>
                    </div>
                    <div className={"percent_Bars"}>
                      <div className={"description_Skill"}>React</div>
                      <div
                        className={"description_Bar"}
                        style={{ width: "20%" }}
                      ></div>
                      <div className={"description_Percent"}>20%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <ProjectContainer />
        </CarouselItem>
        <CarouselItem>
          <div className={"slideContainer"}>c</div>
        </CarouselItem>
      </CarouselContainer>
      {/* <Carous /> */}
      <div className={"absolute"}>
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        {/* Nine as default */}
      </div>
    </div>
  );
}

export default Hero;
