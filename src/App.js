import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import LogoSvg from "./components/OpeningSvg/Logo_Svg";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/MUI theme/theme";

function App() {
   const [logo, setLogo] = useState(true);

   setTimeout(() => {
      setLogo(true);
   }, 5000);

   return (
      <>
         {logo ? (
            <ThemeProvider theme={theme}>
               <Switch>
                  <Route exact path="/" component={Main} />
               </Switch>
            </ThemeProvider>
         ) : (
            <LogoSvg />
         )}
      </>
   );
}

export default App;
