import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "./components/Context/GlobalContext";

ReactDOM.render(
   <React.StrictMode>
      <GlobalContext>
         <Router>
            <App />
         </Router>
      </GlobalContext>
   </React.StrictMode>,
   document.getElementById("root")
);
