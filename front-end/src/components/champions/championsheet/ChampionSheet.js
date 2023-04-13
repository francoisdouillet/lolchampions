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
  console.log(sheet)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function onDelete() {
    if(window.confirm('Voulez-vous supprimmez cette fiche ?')) {
      try {
        const response = await axios.delete(`https://uptight-tam-pig.cyclic.app/api/champion/sheet/${sheetId.id}`);
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
        className="champions__image"
      />
      <div className="champions__menudrop">
        <IconButton onClick={handleClick} color="primary">
          <MoreVertIcon fontSize="large"/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          color="primary"
          PaperProps={{
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 20,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
