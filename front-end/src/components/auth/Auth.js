import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="auth">
      <h1>LOL CHAMPIONS</h1>
      <div>
        <Button
          sx={{ width: "100%", height: "100%"}}
          variant="contained"
        >
          <Link to="/signup">S'inscrire</Link>
        </Button>
      </div>
      <div>
        <Button
          sx={{ width: "100%", height: "100%"}}
          variant="contained"
        >
          <Link to="/signin">Se connecter</Link>
        </Button>
      </div>
    </div>
  );
}

export default Auth;
