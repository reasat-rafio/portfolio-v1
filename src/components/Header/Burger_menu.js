import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  initial: {
    x: "200vw",
  },
  animate: {
    x: 0,

    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    x: "200vw",
  },
};

const Burger_menu = () => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.svg
          width="56"
          height="25"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <g id="cross">
            <path id="Vector 11" d="M1 1L12 11M12 1L1 11" stroke="#A5F2E0" />
          </g>
        </motion.svg>
      </AnimatePresence>
    </div>
  );
};

export default Burger_menu;
