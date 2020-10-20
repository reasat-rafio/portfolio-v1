import React from "react";

import { motion } from "framer-motion";

const mailVariants = {
   initial: { y: 50, opacity: 0 },
   animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 3.5, duration: 0.3, ease: "easeInOut" },
   },
};

const Gmail = () => {
   return (
      <motion.div
         variants={mailVariants}
         initial="initial"
         animate="animate"
         className="gmail_contact"
      >
         <div className="inner">
            <motion.a whileHover={{ x: -5 }} href="mailto:al.reasat@gmail.com">
               al.reasat@gmail.com
            </motion.a>
            <div />
         </div>
      </motion.div>
   );
};

export default Gmail;

{
   /* <svg viewBox="0,0,4,5" height="100" style="margin: 3.49mm;">
        <path
          d="M 0.5 5 V 0.5 H 2 M 2 0.5 C 3.5 0.5 3.5 2.5 2 2.5 H 0.5"
          stroke="black"
          fill="none"
          stroke-width="1"
          stroke-opacity="0.1"
        ></path>
        <polygon
          points="1.32,2.9 2.12,2.9 2.42,2.9 4,5 2.8,5"
          fill="black"
          fill-opacity="0.1"
        />
      </svg> */
}
