import React from "react";
import "./Navbar.css";
import "./Burger.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  window.addEventListener("scroll", () => {
    var current = document.documentElement.scrollTop;
    var maxHeight = document.body.scrollHeight;
    if (current > maxHeight * 0.05) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  });

  return (
    <nav className={`Navbar ${navColor ? "NavbarColor" : ""}`}>
      <div
        className={`logo ${open ? "logoColor" : ""} ${
          navColor ? "logoColor" : ""
        }`}
      >
        Christian Rosa
      </div>
      <div
        className={`logoMobile ${open ? "logoColor" : ""} ${
          navColor ? "logoColor" : ""
        }`}
      >
        Christian
      </div>
      <div
        id="Burger"
        className={`burger_container ${color ? "color" : ""} ${
          open ? "open" : ""
        } ${navColor ? "color" : ""}`}
        onClick={() => setOpen(!open)}
        onMouseOver={() => setColor(!color)}
        onMouseOut={() => setColor(!color)}
      >
        <div className="burger_icon"></div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            key={"Dropdown"}
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            transition={{ duration: 0.5 }}
            exit={{ height: "0vh", transition: { duration: 0.5 } }}
          >
            <motion.li
              key={"List1"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.15 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
            >
              <a href="home" className={"navItem"} id="homeAnchor">
                Home
              </a>
            </motion.li>
            <motion.li
              key={"List2"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
            >
              <a href="#about" className={"navItem"}>
                About
              </a>
            </motion.li>
            <motion.li
              key={"List3"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.25 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
            >
              <a href="#projects" className={"navItem"}>
                Projects
              </a>
            </motion.li>
            <motion.li
              key={"List4"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
            >
              <a href="home" className={"navItem"}>
                Contact
              </a>
            </motion.li>
            <motion.li
              key={"List5"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.35 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0.0 } }}
            >
              <a href="home" className={"navItem"}>
                Resume
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
