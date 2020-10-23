import React from "react";
import Impression from "./Impression/Impression";
import { Grid } from "@material-ui/core";
import AboutMe from "./About_Me/About_me";
import Knowledge from "./Knowledge/Knowledge";
import NoteworthyProjects from "./Other_Noteworthy_Projects/Noteworthy_Projects";
import Footer from "./Footer/Footer";
import IHaveBuilt from "./I_Have_Built/IHaveBuilt";

const Main_Body = () => {
   return (
      <Grid container className="main_body">
         <Grid item sm={false} md={2} className="left_grid" />
         <Grid item sm={12} md={8} className="content">
            <Impression />
            <AboutMe />
            <Knowledge />
            <IHaveBuilt />
            <NoteworthyProjects />
            <Footer />
         </Grid>
         <Grid item sm={false} md={2} className="right_grid" />
      </Grid>
   );
};

export default Main_Body;
