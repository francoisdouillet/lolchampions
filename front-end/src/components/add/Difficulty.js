import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Checkbox, MenuItem, Select, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Difficulty({ formData, setFormData, setPage }) {
  const [commentary, setCommentary] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function onSubmit() {
    if (formData.difficulty === "") {
      setError(true);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/add/matchup",
        { ...formData, commentary: commentary }
      );
      console.log(response);
      alert("tas réussi");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error)
    }
  }

  return (
    <>
      <div className="formadd__lastPage">
      <h1>Comment était le match-up ?</h1>
        <div className="formadd__champions">
          <img
            alt={formData.myChamp}
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${formData.myChamp}.png`}
          />
          <ArrowForwardIcon />
          <img
            alt={formData.HisChamp}
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${formData.hisChamp}.png`}
          />
        </div>
        <Select
          error={error}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => {
            setFormData({ ...formData, difficulty: e.target.value });
          }}
          value={formData.difficulty}
          sx={{
            width: 200,
            mt: 0,
            mb: 1,
          }}
        >
          <MenuItem value={"facile"}>Facile</MenuItem>
          <MenuItem value={"moyen"}>Moyen</MenuItem>
          <MenuItem value={"difficile"}>Difficile</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
        <div className="formadd__checkbox">
          <div>
            <h3>Game gagné ?</h3>
            <Checkbox
              checked={formData.win === true}
              onChange={(e) => {
                setFormData({ ...formData, win: e.target.checked });
              }}
            />
          </div>
          <div>
            <h3>Match-up gagné ?</h3>
            <Checkbox
              checked={formData.winMatchup === true}
              onChange={(e) => {
                setFormData({ ...formData, winMatchup: e.target.checked });
              }}
            />
          </div>
        </div>
        <h2>Commentaires</h2>
        <TextField
          sx={{
            width: "80%",
            mb: 1,
            mt: 1,
          }}
          id="outlined-multiline-static"
          type="text"
          value={commentary}
          onChange={(e) => {
            setCommentary(e.target.value);
          }}
          multiline
          rows={3}
        />
        <div className="navigation formadd__navigation">
          <ArrowBackIcon
            onClick={() => {
              setPage((page) => page - 1);
            }}
            className="navigation__send"
            color="primary"
            sx={{
              width: "20%",
              height: "100%",
              left: 0,
            }}
          />
          <Button
            variant="contained"
            className="navigation__send"
            sx={{ width: "50%", height: "100%", fontWeight: "bold" }}
            onClick={onSubmit}
          >
            SOUMETTRE
          </Button>
        </div>
      </div>
    </>
  );
}

export default Difficulty;
