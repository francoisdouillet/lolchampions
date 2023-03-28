import CloseIcon from "@mui/icons-material/Close";
import { Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
const ModifyMatchup = ({ sheet }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(sheet);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="champions__sheet--container">
      <Button variant="contained" onClick={handleOpen}>
        Modifier les matchups
      </Button>
      <div className={`champions__modify ${isOpen ? "open" : ""}`}>
        <Button onClick={handleClose} className="champions__modify--close">
          <CloseIcon fontSize="large" />
        </Button>
        {sheet.matchups.map((matchup, index) => (
          <div className="champions__modify--champion">
            <img
              alt={matchup.matchup}
              src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${matchup.matchup}.png`}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={matchup.difficulty}
              label="role"
              sx={{
                width: "40vw",
              }}
            //   onChange={(e) => {
            //     addDifficultyToSet(e.target.value, index);
            //   }}
            >
              <MenuItem value={"facile"}>Facile</MenuItem>
              <MenuItem value={"egale"}>Egale</MenuItem>
              <MenuItem value={"difficile"}>Difficile</MenuItem>
              <MenuItem value={"injouable"}>Injouable</MenuItem>
            </Select>
            <textarea
              placeholder="Notes"
              value={matchup.notes}
            //   onChange={(e) => addNotesToSet(e.target.value, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModifyMatchup;
