import { motion } from "framer-motion";
import React from "react";
import BurgerMenu from "../Burger_menu";

const SideDrawer = ({ setMbl_menu, mbl_menu }) => {
   const backDropVariants = {
      initial: {
         x: "200vw",
      },
      animate: {
         x: 0,
         transition: {
            duration: 0.5,
            ease: "easeInOut",
         },
      },
      exit: {
         x: "200vw",
         transition: {
            duration: 0.5,
            ease: "easeInOut",
         },
      },
   };

   return (
      <div className="drop">
         <motion.button
            variants={backDropVariants}
            initial="initial"
            animate="animate"
            className="menu-btn"
            onClick={() => setMbl_menu((prevMenu) => (prevMenu = !prevMenu))}
         >
            <BurgerMenu />
         </motion.button>
         <div>
            <ul className="sideDrawer_ul">
               <li>
                  <a href="#about">About</a>
               </li>
               <li>
                  <a href="#experience">Expertise</a>
               </li>
               <li>
                  <a href="#work">Work</a>
               </li>
               <li>
                  <a href="#contact">Contact</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default SideDrawer;
