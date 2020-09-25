import React, { useEffect, useState } from "react";
import Burger_menu from "./Burger_menu";
import Cross_menu from "./Cross_menu";
import Svg from "./Svg";

import { motion } from "framer-motion";
// import { useCtx } from "../Context/GlobalContext";

const LogoOpacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Header = ({ mbl_menu, setMbl_menu }) => {
  const [active, setActive] = useState(false);

  console.log(active);

  window.addEventListener("scroll", () => {
    const position = document.querySelector(".header-nav");
    let bottomPosition = position.getBoundingClientRect();
    const header = document.querySelector(".header");

    if (window.scrollY >= bottomPosition.bottom) {
      // document.body.style.paddingTop = header.offsetHeight + "px";
      // header.classList.add("active");
      setActive(true);
    } else {
      header.classList.remove("active");
      // document.body.style.paddingTop = 0;
      setActive(false);
    }
  });

  return (
    <div className={active ? "header active" : "header"}>
      <nav className="header-nav">
        <motion.div
          variants={LogoOpacityVariants}
          initial="initial"
          animate="animate"
        >
          <Svg />
        </motion.div>

        <ul>
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "backOut" }}
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: "backOut" }}
          >
            <a href="#experience">Experience</a>
          </motion.li>
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.6, ease: "backOut" }}
          >
            <a href="#work">Work</a>
          </motion.li>
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.8, ease: "backOut" }}
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
        <div className="mobile_menu-btn">
          {!mbl_menu && (
            <button
              className="menu-btn"
              onClick={() => setMbl_menu((prevMenu) => (prevMenu = !prevMenu))}
            >
              <Cross_menu />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
