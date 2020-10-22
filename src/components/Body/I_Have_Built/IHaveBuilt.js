import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import { motion } from "framer-motion";

const IHaveBuilt = () => {
  const [header, setHeader] = useState(false);

  // section will be visible on scroll
  // header animation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = document.querySelector(".have_built_header");
      let topPosition = position.getBoundingClientRect();

      if (window.scrollY >= topPosition.top + 700) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  }, [header]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: header ? 1 : 0, y: header ? 0 : 30 }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" },
        y: { duration: 0.5, ease: "easeInOut" },
      }}
      id="work"
      className="i_have_build"
    >
      <div className="inner">
        <section>
          <div className="have_built_header">
            <h2 className="have_built_header_h2">Some Things I've Built</h2>
            <div className="divider" />
          </div>

          <div className="details">
            <Grid container className="inner_details topSectionPositon">
              <Grid item lg={6} sm={12} xs={12}>
                <div
                  onClick={() =>
                    (window.location.href = "https://red-onion71.netlify.app")
                  }
                  className="img_pj1"
                />
              </Grid>
              <Grid item lg={6} sm={12} className="inner_details_text top">
                <p className="project_overline">Featured Project</p>
                <h3 className="project-title">Red Onion</h3>
                <div className="project_description">
                  <p>
                    A nicer look at your GitHub profile and repository stats
                    with data visualizations of your top languages and stars.
                    Sort through your top repos by number of stars, forks, and
                    size.
                  </p>
                </div>
                <ul>
                  <Button className="btn">React & Redux</Button>
                  <Button className="btn">Strapi</Button>
                  <Button className="btn">Metarial UI</Button>
                </ul>

                <div className="proeject-links">
                  <a
                    target="_blank"
                    href="https://github.com/reasat-rafio/Red-onion.git"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <a target="_blank" href="https://red-onion71.netlify.app">
                    <ExitToAppSharpIcon className="icon" />
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid container className="inner_details">
              <Grid item lg={6} sm={12} className="inner_details_text bottom">
                <p className="project_overline">Featured Project</p>
                <h3 className="project-title">Red Onion</h3>
                <div className="project_description">
                  <p>
                    A nicer look at your GitHub profile and repository stats
                    with data visualizations of your top languages and stars.
                    Sort through your top repos by number of stars, forks, and
                    size.
                  </p>
                </div>
                <ul>
                  <Button className="btn">React</Button>
                  <Button className="btn">Node</Button>
                  <Button className="btn">Express</Button>
                  <Button className="btn">Ant Design</Button>
                </ul>
                <div className="proeject-links">
                  <a
                    target="_blank"
                    href="https://github.com/reasat-rafio/travel_site.git"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <a target="_blank" href="https://travel-bd1.herokuapp.com/">
                    <ExitToAppSharpIcon className="icon" />
                  </a>
                </div>
              </Grid>
              <Grid item lg={6} sm={12} xs={12}>
                <div
                  onClick={() =>
                    (window.location.href = "https://travel-bd1.herokuapp.com")
                  }
                  className="img_pj2"
                />
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default IHaveBuilt;
