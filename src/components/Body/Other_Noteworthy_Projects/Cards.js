import React, { useState, useEffect } from "react";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import FolderSharpIcon from "@material-ui/icons/FolderSharp";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#172a45",
  },
  avatar: {
    backgroundColor: "#172a45",
  },
}));

const Cards = ({ data }) => {
  const { title, details, links, techologies } = data;

  const classes = useStyles();

  // section will be visible on scroll
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = document.querySelector(".card");
      const topPosition = position.getBoundingClientRect();
      if (window.scrollY >= topPosition.top) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [active]);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 30 }}
      transition={{
        opacity: { duration: 0.3, ease: "easeInOut" },
        y: { duration: 0.3, ease: "easeInOut" },
      }}
      className="card"
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Folder" className={classes.avatar}>
              <FolderSharpIcon fontSize="large" color="primary" />
            </Avatar>
          }
          action={
            <IconButton aria-label="External">
              {links.map(
                (l) =>
                  l.github && (
                    <a target="_blank" href={l.github}>
                      <GitHubIcon
                        className="card_icon"
                        fontSize="small"
                        style={{ marginRight: "20px" }}
                        color="secondary"
                      />
                    </a>
                  )
              )}
              {links.map(
                (l) =>
                  l.deploy && (
                    <a target="_blank" href={l.deploy}>
                      <ExitToAppSharpIcon
                        className="card_icon"
                        color="secondary"
                      />
                    </a>
                  )
              )}
            </IconButton>
          }
        />
        <CardContent>
          <Typography className="card_title" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography
            className="card_details"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          {techologies.map((t) => (
            <Button className="card_button">{t.tech}</Button>
          ))}
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default Cards;
