import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.primary,
      display: "flex",
      height: 240,
   },

   tabs: {
      borderRight: `1px solid`,
   },
}));

export default function VerticalTabs() {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className={classes.root}>
         <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
         >
            <Tab className="tab" label="HTML & (S)CSS" />
            <Tab className="tab" label="JavaScript (ES6+)" />
            <Tab className="tab" label="React" />
            <Tab className="tab" label="Node.js" />
            <Tab className="tab" label="Strapi" />
         </Tabs>

         {value === 0 && (
            <div className="skills_details">
               <Typography>
                  As most of the developers i started with HTML and CSS. I know
                  every <span>HTML5</span> and advance <span>CSS3</span>{" "}
                  concepts that i needed as a webdev.
               </Typography>
               <Typography>
                  i prefer using <span>SASS</span> over <span> CSS</span>.
               </Typography>
            </div>
         )}
         {value === 1 && (
            <div className="skills_details">
               <Typography>
                  I am a <span>JavaScript</span> junkie. I did countless
                  projects with <span>js</span> and still can't get enough of
                  this language.
               </Typography>
               <Typography>
                  I am comfortable using{" "}
                  <span>
                     ES6 features, Higher Order Array Functions , Async
                     Operations
                  </span>{" "}
                  and all modern practices.
               </Typography>
            </div>
         )}
         {value === 2 && (
            <div className="skills_details">
               <Typography>
                  <span>React</span> is my strong side. I love how{" "}
                  <span>JSX</span> makes everything simpler. My next plan is
                  learning <span>Gatsby.js</span> and <span>Next.js</span> to
                  expend my <span>React.js</span> knowledge.
               </Typography>
               <Typography>
                  I have good understanding of <span>react hooks, redux,</span>{" "}
                  and some framework such as{" "}
                  <span>Material-UI, Framer Motion, Recharts</span> etc.
               </Typography>
            </div>
         )}
         {value === 3 && (
            <div className="skills_details">
               <Typography>
                  Currently i am working with <span>node js</span>. I am still
                  on the intermediate learning stage. I am enjoying working with
                  backend more than frontend.
               </Typography>
               <Typography>
                  I an comfortable using <span>Express.js</span>,{" "}
                  <span>MongoDB</span>, <span>ejs</span>. I have build few CRUD
                  application using <span>MERN stack</span>.
               </Typography>
            </div>
         )}
         {value === 4 && (
            <div className="skills_details">
               <Typography>
                  I am a solo developer so a headless backend CMS helps. I used{" "}
                  <span>Strapi</span> once and i loving it since then.
               </Typography>
            </div>
         )}
      </div>
   );
}
