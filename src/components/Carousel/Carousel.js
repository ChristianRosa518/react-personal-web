import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={"carousel-item"} style={{ width: width }}>
      {children}
    </div>
  );
};

const CarouselContainer = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  // const handlers = useSwipeable({
  //   // unable to use until fix pointer events to go through elements
  //   onSwipedLeft: () => updateIndex(activeIndex + 1),
  //   onSwipedRight: () => updateIndex(activeIndex - 1),
  // });

  return (
    <div
      // {...handlers}
      className={"carousel"}
    >
      <div
        className={"inner"}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={"indicators"}>
        <button
          className={`${0 === activeIndex ? "active" : ""}`}
          onClick={() => {
            updateIndex(0);
          }}
        >
          Home
        </button>
        <button
          className={`${1 === activeIndex ? "active" : ""}`}
          onClick={() => {
            updateIndex(1);
          }}
        >
          About
        </button>
        <button
          className={`${2 === activeIndex ? "active" : ""}`}
          onClick={() => {
            updateIndex(2);
          }}
        >
          Projects
        </button>
        <button
          className={`${3 === activeIndex ? "active" : ""}`}
          onClick={() => {
            updateIndex(3);
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default CarouselContainer;
