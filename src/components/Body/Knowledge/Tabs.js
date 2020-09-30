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
            As most of the developers i started with HTML and CSS. I know every
            concepts of <span>HTML5</span> and advance <span>CSS3</span> and
            also can do animation with <span>CSS</span>.
          </Typography>
          <Typography>
            Later i found out about <span>SASS</span> and now i prefer{" "}
            <span>SASS</span> more than <span>CSS</span> in most of the cases.
          </Typography>
        </div>
      )}
      {value === 1 && (
        <div className="skills_details">
          <Typography>
            <span>JavaScript</span> is my first programming language. i did few
            course on <span>JavaScript</span> and later started building things
            on my own. I build some website and i was amazed by how much i can
            do with <span>Js</span>. Later i decide to learn a frame-work of{" "}
            <span>Js</span>.
          </Typography>
          <Typography>
            I am comfortable using{" "}
            <span>
              ES6 features, Higher Order Array Functions , Async Operations
            </span>{" "}
            and all modern practices.
          </Typography>
        </div>
      )}
      {value === 2 && (
        <div className="skills_details">
          <Typography>
            <span>React</span> is my strong side. After using{" "}
            <span>JavaScript</span> for almost half a year i decided to learn{" "}
            <span>React</span>. I like how <span>JSX</span> makes everything
            simpler. My next plan is learning <span>Gatsby.js</span> and{" "}
            <span>Next.js</span>
          </Typography>
          <Typography>
            I have good understanding of{" "}
            <span>react hooks, redux toolkit,</span> and some framework such as{" "}
            <span>Material-UI, Framer Motion, Recharts</span>.
          </Typography>
        </div>
      )}
      {value === 3 && (
        <div className="skills_details">
          <Typography>
            I wanted to know how backend work so i learned <span>Node.js</span>.
            i can make a server up running quick and easy.
          </Typography>
          <Typography>
            I know <span>Express.js</span> and template engine <span>ejs</span>.
            I can Build crud application using <span>MERN stack</span>.
          </Typography>
        </div>
      )}
      {value === 4 && (
        <div className="skills_details">
          <Typography>
            I am a solo developer so a headless backend CMS helps. I used{" "}
            <span>Strapi</span> and i loved it.
          </Typography>
        </div>
      )}
    </div>
  );
}
