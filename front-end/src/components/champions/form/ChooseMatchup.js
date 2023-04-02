import { Button, MenuItem, Select } from "@mui/material";
import Searchchamp from "../../utils/Searchchamp";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ChooseMatchup = ({ setFormData, formData, page, setPage }) => {
  const [matchupsSets, setMatchupsSets] = useState([]);

  console.log(matchupsSets);

  useEffect(() => {
    if (formData.matchups.length === 0) {
      setMatchupsSets([
        {
          matchup: "",
          difficulty: "",
          notes: "",
        },
      ]);
    } else {
      setMatchupsSets(formData.matchups);
    }
  }, []);
  function addMatchupSet() {
    setMatchupsSets([
      ...matchupsSets,
      {
        matchup: "",
        difficulty: "",
        notes: "",
      },
    ]);
  }

  function addDifficultyToSet(value, index) {
    const newMatchupSet = {
      ...matchupsSets[index],
      difficulty: value,
    };
    const newMatchupSets = [...matchupsSets];
    newMatchupSets[index] = newMatchupSet;
    setMatchupsSets(newMatchupSets);
  }
  function addNotesToSet(value, index) {
    const newMatchupSet = {
      ...matchupsSets[index],
      notes: value,
    };
    const newMatchupSets = [...matchupsSets];
    newMatchupSets[index] = newMatchupSet;
    setMatchupsSets(newMatchupSets);
  }

  async function onSubmit() {
    setFormData({ ...formData, matchups: matchupsSets });
    setPage(page + 1);
  }

  return (
    <div className="champions">
      <h1>Enregistre les matchups contre {formData.champion}</h1>
      {matchupsSets.map((matchup, index) => (
        <div>
          {matchup.matchup ? "" : <h2>Choisis ton champion</h2>}
          {matchup.matchup ? (
            <div className="champions__modify--champion">
              <img
                alt={matchup.matchup}
                src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${matchup.matchup}.png`}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={matchupsSets[index].difficulty}
                label="role"
                sx={{
                    width: "40vw",
                    color: "white",
                    border: "2px solid white",
                    '& .MuiSvgIcon-root' : {
                      color: "white"
                    }
                  }}
                onChange={(e) => {
                  addDifficultyToSet(e.target.value, index);
                }}
              >
                <MenuItem value={"facile"}>Facile</MenuItem>
                <MenuItem value={"egale"}>Egale</MenuItem>
                <MenuItem value={"difficile"}>Difficile</MenuItem>
                <MenuItem value={"injouable"}>Injouable</MenuItem>
              </Select>
              <textarea
                placeholder="Notes"
                value={matchupsSets[index].notes}
                onChange={(e) => addNotesToSet(e.target.value, index)}
              />
              <Button>
                <DeleteIcon />
              </Button>
            </div>
          ) : (
            <Searchchamp
              className="champions__matchups--search"
              setMatchupsSets={setMatchupsSets}
              matchupsSets={matchupsSets}
              index={index}
            />
          )}
        </div>
      ))}
      <Button variant="contained" onClick={addMatchupSet}>
        Ajouter un ensemble de matchup
      </Button>
      <div className="champions__navigation">
        <Button>
          <ArrowBackIcon
            onClick={() => {
              setPage((page) => page - 1);
            }}
            sx={{
              width: "50vw",
              height: "8vh",
            }}
          />
        </Button>
        <Button
          variant="contained"
          sx={{ marginRight: "8vw", height: "100%" }}
          onClick={onSubmit}
        >
          Publier
        </Button>
      </div>
    </div>
  );
};

export default ChooseMatchup;
