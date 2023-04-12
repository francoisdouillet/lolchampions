import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmitClick = async (event) => {
    event.preventDefault();
    const userInformation = {
      email: state.email,
      username: state.username,
      password: state.password,
    };
    console.log(userInformation);
    try {
      const response = await axios.post(
        "https://uptight-tam-pig.cyclic.app/api/auth/signup",
        userInformation,
        {
          headers: {
            Origin: "http://localhost:3001",
          },
        }
      );
      console.log(response);
      alert("Utilisateur créé");
      navigate("/signin");
    } catch (error) {
      console.error(error);
      alert("BAD REQUEST: Email or Username unavailable");
    }
  };

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
          id="email"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
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
          id="username"
          type="text"
          label="Username"
          variant="filled"
          name="username"
          onChange={handleChange}
          value={state.username}
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
          id="password"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
          required
          color="third"
        />
        <Button
          onClick={handleSubmitClick}
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
          S'inscrire
        </Button>
        <Link to="/auth">
          <IconButton color="primary">
            <ArrowBackIcon fontSize="large"></ArrowBackIcon>
          </IconButton>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
