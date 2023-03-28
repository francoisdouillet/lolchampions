import { useState } from "react";
import Allspells from "../../utils/Allspells";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const SheetSpell = ({ sheet }) => {
  const [indexSpell, setIndexSpell] = useState(0);
  const spells = Allspells();
  return (
    <div className="champions__sheet--container">
      <h3>SPELLS: {sheet.spells[indexSpell].title}</h3>
      <div className="champions__sheet--number">
        {sheet.spells.length > 1 && (
          <>
            {Array(sheet.spells.length)
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setIndexSpell(index)}
                  className={index === indexSpell ? "selected" : ""}
                >
                  {index + 1}
                </button>
              ))}{" "}
          </>
        )}
        <IconButton color="primary" sx={{padding: 0}}>
          <EditIcon />
        </IconButton>
      </div>

      <div className="champions__sheet--row">
        <div className="champions__sheet--circle">
          <img
            src={
              spells.find(
                (spell) =>
                  spell.name === sheet.spells[indexSpell].spells[0].name
              ).image
            }
            alt={
              spells.find(
                (spell) =>
                  spell.name === sheet.spells[indexSpell].spells[0].name
              ).name
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            src={
              spells.find(
                (spell) =>
                  spell.name === sheet.spells[indexSpell].spells[1].name
              ).image
            }
            alt={
              spells.find(
                (spell) =>
                  spell.name === sheet.spells[indexSpell].spells[1].name
              ).name
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SheetSpell;
