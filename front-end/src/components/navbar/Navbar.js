import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <IconButton color="secondary">
          <HomeIcon className="navbar__icon" />
        </IconButton>
      </Link>
      <Link to="/champions">
        <IconButton color="secondary">
          <BookmarkAddIcon className='navbar__icon'/>
        </IconButton>
      </Link>
      <Link to="/add">
        <IconButton color="secondary">
          <AddCircleIcon className="navbar__icon" />
        </IconButton>
      </Link>
      <Link to="/user">
        <IconButton color="secondary">
          <AccountCircleIcon className="navbar__icon" />
        </IconButton>
      </Link>
    </nav>
  );
}

export default NavBar;