import React from "react";
import { motion } from "framer-motion";

const mainDivVariants = {
  initial: {},
  animate: {
    transition: {},
  },
};

const h1Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
  },
};

const h2Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 2.3, duration: 0.3, ease: "easeInOut" },
  },
};

const h3Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 2.6, duration: 0.3, ease: "easeInOut" },
  },
};

const pVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 2.9, duration: 0.3, ease: "easeInOut" },
  },
};

const aVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 3.2, duration: 0.3, ease: "easeInOut" },
  },
};

const Impression = () => {
  return (
    <div className="impression">
      <motion.div
        className="inner"
        variants={mainDivVariants}
        initial="initial"
        animate="animate"
      >
        <section>
          <motion.h1 variants={h1Variants}>Hi, my name is</motion.h1>
          <motion.h2 variants={h2Variants}>Al Reasat Rafio.</motion.h2>
          <motion.h3 variants={h3Variants}>
            I build things for the web.
          </motion.h3>
          <motion.p variants={pVariants}>
            I'm a self-taught software engineer based in Dhaka, specializing in
            building (and occasionally designing) exceptional websites,
            applications, and few more things in between.
          </motion.p>
          <motion.div variants={aVariants}>
            <a href="mailto:al.reasat@gmail.com">Get in Touch</a>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Impression;
