import { useState } from "react";
import Allspells from "../../utils/Allspells";

const SheetSpell = ({ sheet }) => {
  const [indexSpell, setIndexSpell] = useState(0);
  const spells = Allspells();
  return (
    <div className="champions__sheet--container">
      <h3>SPELLS: {sheet.spells[indexSpell].title}</h3>
      {sheet.runes.length > 1 && (
        <div className="champions__sheet--number">
          {Array(sheet.runes.length)
            .fill()
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setIndexSpell(index)}
                className={index === indexSpell ? "selected" : ""}
              >
                {index + 1}
              </button>
            ))}
        </div>
      )}
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
