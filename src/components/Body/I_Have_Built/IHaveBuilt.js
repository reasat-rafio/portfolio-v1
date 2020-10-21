import React from "react";
import { Grid, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";

const IHaveBuilt = () => {
  return (
    <div id="work" className="i_have_build">
      <div className="inner">
        <section>
          <div className="have_built_header">
            <h2>Some Things I've Built</h2>
            <div className="divider" />
          </div>

          <div className="details">
            <Grid container className="inner_details">
              <Grid item lg={7} sm={12} xs={12}>
                <div className="img_pj" />
              </Grid>
              <Grid item lg={5} sm={12} className="inner_details_text">
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
                  <a href="">
                    <GitHubIcon className="icon" />
                  </a>
                  <a href="">
                    <ExitToAppSharpIcon className="icon" />
                  </a>
                </div>
              </Grid>
            </Grid>
            {/* <div className="inner_details"></div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IHaveBuilt;
