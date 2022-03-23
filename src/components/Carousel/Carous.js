import React from "react";
import { useState } from "react";
import "./carousel.css";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

import classes from "../Hero/Hero.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carous() {
  const swiper = useSwiper();

  SwiperCore.use([Navigation, Pagination]);

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
    <Swiper
      className={"testArea"}
      modules={(Navigation, Pagination)}
      navigation
      // pagination
      direction={"horizontal"}
      loop={true}
      id={"main"}
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={classes.titleContainer}>
          <AnimatePresence>
            {intro && (
              <motion.div
                key={"intro1"}
                initial={{ x: "-8%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                className={classes.title}
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
                className={classes.titlebot}
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
              className={classes.title}
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
              className={classes.titlebot}
              exit={{ x: "-20%", opacity: 0 }}
            >
              and i'm an aspiring Front-end Developer
            </motion.div>
          )}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"container"}>
          <div className={"trollImage"}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}
