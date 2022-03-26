import React, { useState } from "react";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import Step from "../Steps/Step";
import CarouselContainer, { CarouselTest } from "../Carousel/CarouselTest";

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
        <CarouselTest>
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
        </CarouselTest>
        <CarouselTest>
          <div className={"titleContainer"}>
            <div className={"aboutContainer"}>
              <div className={"aboutImage"}></div>
              <div className={"aboutDescription"}></div>
            </div>
          </div>
        </CarouselTest>
        <CarouselTest>
          <div className={"titleContainer"}>b</div>
        </CarouselTest>
        <CarouselTest>
          <div className={"titleContainer"}>c</div>
        </CarouselTest>
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
