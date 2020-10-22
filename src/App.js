import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Logo_Svg from "./components/OpeningSvg/Logo_Svg";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/MUI theme/theme";

function App() {
  const [logo, setLogo] = useState(false);

  setTimeout(() => {
    setLogo(true);
  }, 5000);

  return (
    <>
      {logo ? (
        <Switch>
          <ThemeProvider theme={theme}>
            <Route exact path="/" component={Main} />
          </ThemeProvider>
        </Switch>
      ) : (
        <Logo_Svg />
      )}
    </>
  );
}

export default App;
