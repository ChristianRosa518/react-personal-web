import React from "react";
import "./Navbar.css";
import "./Burger.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  //
  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }

  window.addEventListener("resize", appHeight);
  appHeight();

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
            animate={{ height: "calc(var(--vh, 1vh) * 100)" }}
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
              <a
                href="https://drive.google.com/file/d/1TMn9VaOsNo1sVSgdV7r8RPhH-ripOoMI/view?usp=sharing"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Resume
              </a>
            </motion.li>
            <motion.li
              key={"List2"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
            >
              <a
                href="https://github.com/ChristianRosa518"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Github
              </a>
            </motion.li>
            <motion.li
              key={"List3"}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.25 }}
              exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
            >
              <a
                href="https://www.instagram.com/chedic_/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Instagram
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
