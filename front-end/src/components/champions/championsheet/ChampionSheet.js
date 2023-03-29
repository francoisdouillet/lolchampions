import { useParams } from "react-router-dom";
import GetOneSheet from "../../utils/GetOneSheet";
import SheetItem from "./SheetItem";
import SheetMatchup from "./SheetMatchup";
import SheetRune from "./SheetRune";
import SheetSkill from "./SheetSkill";
import SheetSpell from "./SheetSpell";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModifyMatchup from "./Modify/ModifyMatchup";

const ChampionSheet = () => {
  const sheetId = useParams();
  const sheet = GetOneSheet({ id: sheetId.id });
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(sheet)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function onDelete() {
    if(window.confirm('Voulez-vous supprimmez cette fiche ?')) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/champion/sheet/${sheetId.id}`);
        console.log(response);
        alert("Fiche de champion supprimé !");
        navigate('/champions')
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  return (
    <div className="champions">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${sheet.champion}.png`}
        alt={sheet.champion}
      />
      <div className="champions__menudrop">
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={onDelete}>Supprimer</MenuItem>
        </Menu>
      </div>
      <div className="champions__sheet">
        {sheet && sheet.runes ? (
          <>
            <SheetRune sheet={sheet} />
            <SheetSpell sheet={sheet} />
            <SheetItem sheet={sheet} />
            <SheetSkill sheet={sheet} />
            <SheetMatchup sheet={sheet} />
            <ModifyMatchup sheet={sheet} />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default ChampionSheet;
