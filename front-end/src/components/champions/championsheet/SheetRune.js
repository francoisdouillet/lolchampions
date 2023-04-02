import { useState } from "react";
import Allrunes from "../../utils/Allrunes";
import Allsousrunes from "../../utils/Allsousrunes";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import ModifyRune from "./Modify/ModifyRune";

const SheetRune = ({ sheet }) => {
  const runes = Allrunes();
  const sousrunes = Allsousrunes();
  const [indexRune, setIndexRune] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="champions__sheet--container">
      <h3>RUNES: {sheet.runes[indexRune].title}</h3>
      <p>{sheet.runes[indexRune].notes}</p>
      <div className="champions__sheet--number">
        {sheet.runes.length > 1 && (
          <>
            {Array(sheet.runes.length)
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setIndexRune(index)}
                  className={index === indexRune ? "selected" : ""}
                >
                  {index + 1}
                </button>
              ))}
          </>
        )}
          <EditIcon onClick={() => setIsOpen(true)} color="primary"/>
      </div>
      {/* POPUP POUR MODIFIER MATCHUP */}
      <ModifyRune isOpen={isOpen} setIsOpen={setIsOpen} sheet={sheet} />
      <div className="champions__sheet--row runes">
        <h4>{sheet.runes[indexRune].runes1.name}</h4>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).icon
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[0].runes[sheet.runes[indexRune].runes1.rune1].name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[0].runes[sheet.runes[indexRune].runes1.rune1].icon
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[1].runes[sheet.runes[indexRune].runes1.rune2].name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[1].runes[sheet.runes[indexRune].runes1.rune2].icon
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[2].runes[sheet.runes[indexRune].runes1.rune3].name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[2].runes[sheet.runes[indexRune].runes1.rune3].icon
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[3].runes[sheet.runes[indexRune].runes1.rune4].name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes1.name
              ).slots[3].runes[sheet.runes[indexRune].runes1.rune4].icon
            }
          />
        </div>
      </div>
      <div className="champions__sheet--row runes">
        <h4>{sheet.runes[indexRune].runes2.name}</h4>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes2.name
              ).name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes2.name
              ).icon
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes2.name
              ).slots[sheet.runes[indexRune].runes2.rune1.index].runes[
                sheet.runes[indexRune].runes2.rune1.rune
              ].name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes2.name
              ).slots[sheet.runes[indexRune].runes2.rune1.index].runes[
                sheet.runes[indexRune].runes2.rune1.rune
              ].icon
            }
          />
        </div>
        <div className="champions__sheet--circle">
          <img
            alt={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes2.name
              ).slots[sheet.runes[indexRune].runes2.rune2.index].runes[
                sheet.runes[indexRune].runes2.rune2.rune
              ].name
            }
            src={
              runes.find(
                (rune) => rune.name === sheet.runes[indexRune].runes2.name
              ).slots[sheet.runes[indexRune].runes2.rune2.index].runes[
                sheet.runes[indexRune].runes2.rune2.rune
              ].icon
            }
          />
        </div>
        <div className="champions__sheet--littleCircle">
          <img
            src={sousrunes[0].runes[sheet.runes[indexRune].runes3.rune1].icon}
            alt={sousrunes[0].runes[sheet.runes[indexRune].runes3.rune1].name}
          />
        </div>
        <div className="champions__sheet--littleCircle">
          <img
            src={sousrunes[1].runes[sheet.runes[indexRune].runes3.rune2].icon}
            alt={sousrunes[1].runes[sheet.runes[indexRune].runes3.rune2].name}
          />
        </div>
        <div className="champions__sheet--littleCircle">
          <img
            src={sousrunes[2].runes[sheet.runes[indexRune].runes3.rune3].icon}
            alt={sousrunes[2].runes[sheet.runes[indexRune].runes3.rune3].name}
          />
        </div>
      </div>
    </div>
  );
};

export default SheetRune;
