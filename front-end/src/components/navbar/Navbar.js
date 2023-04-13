import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`navbar ${matches ? "navbar__large" : ""}`}>
      {matches ? (
        <>
          <Link to="/">
            <div className="navbar__large--text">Home</div>
          </Link>
          <Link to="/champions">
            <div className="navbar__large--text">Matchup</div>
          </Link>
          <Link to="/add">
            <div className="navbar__large--text">Ajouter une partie</div>
          </Link>
          <Link to="/user">
            <div className="navbar__large--text">Compte</div>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <IconButton color="secondary">
              <HomeIcon className="navbar__icon" />
            </IconButton>
          </Link>
          <Link to="/champions">
            <IconButton color="secondary">
              <BookmarkAddIcon className="navbar__icon" />
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
        </>
      )}
    </nav>
  );
}

export default NavBar;
