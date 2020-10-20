import React from "react";
// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton } from "@material-ui/core";

import { motion } from "framer-motion";

const socialVariants = {
   initial: { y: 50, opacity: 0 },
   animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 3.5, duration: 0.3, ease: "easeInOut" },
   },
};

const Socials = () => {
   return (
      <motion.div
         variants={socialVariants}
         initial="initial"
         animate="animate"
         className="socials_content"
      >
         <ul className="__all_socials">
            <li>
               <IconButton aria-label="github">
                  <a target="_blank" href="https://github.com/reasat-rafio">
                     <GitHubIcon className="icon" />
                  </a>
               </IconButton>
            </li>
            <li>
               <IconButton aria-label="LinkIn">
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/reasat-rafio-594718194"
                  >
                     <LinkedInIcon className="icon" />
                  </a>
               </IconButton>
            </li>
            <li>
               <IconButton aria-label="twitter">
                  <a target="_blank" href="https://twitter.com/ar_rafffio">
                     <TwitterIcon className="icon" />
                  </a>
               </IconButton>
            </li>
            <li>
               <IconButton aria-label="facebook">
                  <a
                     target="_blank"
                     href="https://www.facebook.com/alreasat.rafio"
                  >
                     <FacebookIcon className="icon" />
                  </a>
               </IconButton>
            </li>
            <li>
               <div className="line" />
            </li>
         </ul>
      </motion.div>
   );
};

export default Socials;
