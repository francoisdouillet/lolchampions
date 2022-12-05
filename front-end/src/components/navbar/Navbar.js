import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <IconButton color="primary">
          <HomeIcon className="navbar__icon" />
        </IconButton>
      </Link>
      <Link to="/add">
        <IconButton color="primary">
          <AddCircleIcon className="navbar__icon" />
        </IconButton>
      </Link>
      <Link to="/user">
        <IconButton color="primary">
          <AccountCircleIcon className="navbar__icon" />
        </IconButton>
      </Link>
    </nav>
  );
}

export default NavBar;