import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  initial: {
    x: "200vw",
  },
  animate: {
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "200vw",
  },
};

const Cross_menu = () => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.svg
          width="56"
          height="20"
          viewBox="0 0 56 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <g id="burger-menu">
            <path id="Vector 8" d="M0 2H56" stroke="#A5F2E0" stroke-width="3" />
            <path
              id="Vector 9"
              d="M55.5 16H10.5"
              stroke="#A5F2E0"
              stroke-width="3"
            />
            <path
              id="Vector 10"
              d="M55 29H23.5"
              stroke="#A5F2E0"
              stroke-width="3"
            />
          </g>
        </motion.svg>
      </AnimatePresence>
    </div>
  );
};

export default Cross_menu;
