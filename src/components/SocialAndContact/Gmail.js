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
