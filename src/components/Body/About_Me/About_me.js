import React, { useEffect, useState } from "react";
import img from "../../../utils/IMG_20200927_202758.jpg";

import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import Rectangle from "./Rectangle";

const About_me = () => {
  const [active, setActive] = useState(false);

  // section will be visible on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = document.querySelector(".about_me");
      let topPosition = position.getBoundingClientRect();
      if (window.scrollY >= topPosition.top - 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 30 }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" },
        y: { duration: 0.5, ease: "easeInOut" },
      }}
      id="about"
      className="about_me"
    >
      <div className="inner">
        <section>
          <div className="about_header">
            <h2>About Me</h2>
            <div className="divider" />
          </div>
          <div className="details">
            <Grid spacing={5} container>
              <Grid className="inner__details" item sm={7}>
                <p>
                  Hello! I'm Rafio, a self-taught fullstack Web Developer from
                  Dhaka, BD.
                </p>
                <p>
                  I enjoy creating things that live on the internet. My goal is
                  to always build products that provide pixel-perfect,
                  performant experiences.
                </p>
                <p>
                  I always had passion for computer and i am good with problem
                  solving so i start learning programming. I love what i do.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <ul className="skills_list">
                  <li>JavaScript (ES6+)</li>
                  <li>HTML & (S)CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Strapi</li>
                </ul>
              </Grid>
              <div className="img">
                <Grid sm={5} item>
                  <img src={img} alt="" />
                  <div className="img_overlay" />
                  <Rectangle />
                </Grid>
              </div>
            </Grid>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About_me;
