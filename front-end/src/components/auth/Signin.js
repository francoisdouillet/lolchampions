import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

function Signin() {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });

  //HandleChange for form
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  async function onClickSubmit() {
    const userInformation = {
      email: state.email,
      password: state.password,
    };
    try {
      await axios
        .post("https://uptight-tam-pig.cyclic.app/api/auth/login", userInformation)
        .then((response) => {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("username", response.data.username);
          navigate("/");
        });
    } catch (error) {
      console.error(error);
      alert("Mot de passe incorect");
    }
  }

  return (
    <div>
      <form className="sign" action="" method="">
        <TextField
          sx={{
            width: "70%",
            mt: 2,
            mb: 2,
            "@media (min-width: 768px)": {
              width: "20%",
            },
          }}
          type="email"
          id="email"
          name="email"
          label="Email"
          variant="filled"
          value={state.email}
          onChange={handleChange}
          required
          color="third"
        />
        <TextField
          sx={{
            width: "70%",
            mt: 2,
            mb: 2,
            "@media (min-width: 768px)": {
              width: "20%",
            },
          }}
          label="Password"
          variant="filled"
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
          color="third"
        />
        <Button
          onClick={onClickSubmit}
          sx={{ 
            width: "70%", 
            height: "10%", 
            mb: 2, 
            mt: 2,
            fontWeight: 'bold',
            '@media (min-width: 768px)': {
              width: "20%",
              height: '7%'
            }
          }}
          variant="contained"
        >
          Se connecter
        </Button>
        <p>Compte test, email: admin@admin.fr password: Admin123!</p>
        <Link to="/auth">
          <IconButton color="primary">
            <ArrowBackIcon fontSize="large"></ArrowBackIcon>
          </IconButton>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
