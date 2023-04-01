import { useState } from "react";
import Allspells from "../../utils/Allspells";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import ModifySpell from "./Modify/ModifySpell";

const SheetSpell = ({ sheet }) => {
  const [indexSpell, setIndexSpell] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const spells = Allspells();
  return (
    <div className="champions__sheet--container">
      <h3>SPELLS: {sheet.spells[indexSpell].title}</h3>
      <p>{sheet.spells[indexSpell].notes}</p>
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
        <EditIcon onClick={() => setIsOpen(true)} color="primary"/>
      </div>
      {/*POPUP POUR MODIFIER ITEM*/}
      <ModifySpell isOpen={isOpen} setIsOpen={setIsOpen} sheet={sheet}/>
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
