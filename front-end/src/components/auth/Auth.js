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
      <p style={{color: "white"}}>Compte test, email: admin@admin.fr password: Admin123!</p>
    </div>
  );
}

export default Auth;
