import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchChampPopup from "../../../utils/SearchChampPopup";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModifyMatchup = ({ sheet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChamp, setIsOpenChamp] = useState(false);
  const [matchups, setMatchups] = useState(sheet.matchups);
  const navigate = useNavigate();

  const handleAddMatchup = () => {
    const newMatchup = {
      matchup: "",
      difficulty: "",
      notes: "",
    };
    setMatchups([...matchups, newMatchup]);
  };

  const handleSave = () => {
    for (let i = 0; i < matchups.length; i++) {
      if (matchups[i].matchup === "" || matchups[i].difficulty === "") {
        alert("Il manque des informations");
        return;
      }
    }
    axios
      .put(
        `https://uptight-tam-pig.cyclic.app/api/champion/sheet/${sheet._id}`,
        { matchups }
      )
      .then((res) => {
        console.log(res.data);
        alert("Matchup sauvegardé");
        navigate(`/champions/${sheet._id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMatchupChange = (event, index) => {
    const newMatchup = {
      ...matchups[index],
      [event.target.name]: event.target.value,
    };
    const newMatchups = [...matchups];
    newMatchups[index] = newMatchup;
    setMatchups(newMatchups);
  };

  const handleDeleteOneMatchup = (index) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce matchup ?")) {
      const newMatchups = [...matchups];
      newMatchups.splice(index, 1);
      setMatchups(newMatchups);
    }
  };

  return (
    <div className="champions__sheet--container">
      <Button
        variant="contained"
        sx={{ fontWeight: "bold" }}
        onClick={() => setIsOpen(true)}
      >
        Modifier les matchups
      </Button>
      <div className={`champions__modify ${isOpen ? "open" : ""}`}>
        <Button
          onClick={() => setIsOpen(false)}
          className="champions__modify--close"
        >
          <CloseIcon fontSize="large" />
        </Button>
        {matchups.map((matchup, index) => (
          <div className="champions__modify--champion" key={index}>
            {matchup.matchup ? (
              <img
                alt={matchup.matchup}
                src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${matchup.matchup}.png`}
              />
            ) : (
              <>
                <Button
                  variant="contained"
                  sx={{
                    height: "100%",
                    width: "20vw",
                    "@media (min-width: 768px)": {
                      width: "5vw",
                    },
                  }}
                  onClick={() => setIsOpenChamp(true)}
                >
                  <AddCircleIcon />
                </Button>
                <SearchChampPopup
                  isOpenChamp={isOpenChamp}
                  setIsOpenChamp={setIsOpenChamp}
                  handleMatchupChange={handleMatchupChange}
                  index={index}
                />
              </>
            )}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="difficulty"
              value={matchup.difficulty}
              sx={{
                width: "40vw",
                color: "white",
                border: "2px solid white",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              onChange={(e) => handleMatchupChange(e, index)}
            >
              <MenuItem value={"facile"}>Facile</MenuItem>
              <MenuItem value={"egale"}>Egale</MenuItem>
              <MenuItem value={"difficile"}>Difficile</MenuItem>
              <MenuItem value={"injouable"}>Injouable</MenuItem>
            </Select>
            <textarea
              placeholder="Notes"
              name="notes"
              value={matchup.notes}
              onChange={(e) => handleMatchupChange(e, index)}
            />
            <IconButton onClick={() => handleDeleteOneMatchup(index)}>
              <DeleteIcon color="primary" />
            </IconButton>
          </div>
        ))}
        <div className="champions__modify--button">
          <Button variant="contained" onClick={handleAddMatchup}>
            Ajouter un matchup
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Enregistrer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModifyMatchup;
