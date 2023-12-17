import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import imageToAdd from "../header/logo_en.png";
import "./Header.css"

// const useStyles = makeStyles({
//     navlinks: {
//       display: "flex",
//       marginLeft: 10,
//     },
//    logo: {
//       flexGrow: "1",
//       cursor: "pointer",
//     },
//     link: {
//       textDecoration: "none",
//       color: "white",
//       fontSize: "20px",
//       marginLeft: 20,
//       "&:hover": {
//         color: "yellow",
//         borderBottom: "1px solid white",
//       },
//     },
//   });

function Navbar() {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className="logo">
            <img src={imageToAdd} alt="Image" />
        </Typography>
          <div className="navlinks">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;