import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64ffda",
    },
    secondary: {
      main: "#8892b0",
    },
  },
});

export default theme;
