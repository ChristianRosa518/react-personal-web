import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.css";
import "../Hero/About.css";

export const CarouselChild = ({ children, width }) => {
  return (
    <div className={"image-carousel-item"} style={{ width: width }}>
      {children}
    </div>
  );
};

const ImageCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    // unable to use until fix pointer events to go through elements
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div
      {...handlers}
      className={"imageCarousel"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={"inner"}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={"imageIndicators"}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <p>
            <i className="imageArrows left"></i>
          </p>
        </button>
        <p className={"text"}>Myself and I</p>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <p>
            <i className="imageArrows right"></i>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
