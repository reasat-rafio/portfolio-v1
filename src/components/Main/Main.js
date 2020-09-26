import React, { useState } from "react";
import Backdrop from "../Header/BackDrop/Backdrop";
import SideDrawer from "../Header/BackDrop/SideDrawer";
import Header from "../Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Main_Body from "../Body/Main_Body";
import Gmail from "../SocialAndContact/Gmail";
import Socials from "../SocialAndContact/Socials";

// Logo fade in animation
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

// Nav dropDown animation

const Main = () => {
  const [mbl_menu, setMbl_menu] = useState(false);

  return (
    <div style={{ height: "100%" }}>
      <Header setMbl_menu={setMbl_menu} mbl_menu={mbl_menu} />
      {mbl_menu && <Backdrop setMbl_menu={setMbl_menu} mbl_menu={mbl_menu} />}
      <AnimatePresence>
        {mbl_menu && (
          <motion.div
            className="sideDrawer"
            variants={backDropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SideDrawer setMbl_menu={setMbl_menu} mbl_menu={mbl_menu} />
          </motion.div>
        )}
      </AnimatePresence>
      <Main_Body />
      <Gmail />
      <Socials />
    </div>
  );
};

export default Main;
