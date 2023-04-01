import { useState } from "react";
import Allskillschamp from "../../utils/Allskillschamp";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import ModifySkill from "./Modify/ModifySkill";

const SheetSkill = ({ sheet }) => {
  const [indexSkill, setIndexSkill] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const skills = Allskillschamp(sheet.champion);
  return (
    <div className="champions__sheet--container">
      <h3>SKILLS : {sheet.skills[indexSkill].title}</h3>
      <div className="champions__sheet--number">
        {sheet.skills.length > 1 && (
          <>
            {Array(sheet.skills.length)
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setIndexSkill(index)}
                  className={index === indexSkill ? "selected" : ""}
                >
                  {index + 1}
                </button>
              ))}
          </>
        )}
        <EditIcon onClick={() => setIsOpen(true)} color="primary"/>
      </div>
      <ModifySkill sheet={sheet} isOpen={isOpen} setIsOpen={setIsOpen}/>
      {skills && (
        <div className="champions__skills">
          <div>
            <img
              alt={skills[0].name}
              src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[0].id}.png`}
            />
            <span>Q</span>
            <div>
              {[...Array(18)].map((_, i) => (
                <button
                  key={i}
                  className={
                    sheet.skills[indexSkill].skills[i] === "Q" ? "selected" : ""
                  }
                  disabled={sheet.skills[indexSkill].skills[i] !== "Q"}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div>
            <img
              alt={skills[1].name}
              src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[1].id}.png`}
            />
            <span>W</span>
            <div>
              {[...Array(18)].map((_, i) => (
                <button
                  key={i}
                  className={
                    sheet.skills[indexSkill].skills[i] === "W" ? "selected" : ""
                  }
                  disabled={sheet.skills[indexSkill].skills[i] !== "W"}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div>
            <img
              alt={skills[2].name}
              src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[2].id}.png`}
            />
            <span>E</span>
            <div>
              {[...Array(18)].map((_, i) => (
                <button
                  key={i}
                  className={
                    sheet.skills[indexSkill].skills[i] === "E" ? "selected" : ""
                  }
                  disabled={sheet.skills[indexSkill].skills[i] !== "E"}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div>
            <img
              alt={skills[3].name}
              src={`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${skills[3].id}.png`}
            />
            <span>R</span>
            <div>
              {[...Array(18)].map((_, i) => (
                <button
                  key={i}
                  className={
                    sheet.skills[indexSkill].skills[i] === "R" ? "selected" : ""
                  }
                  disabled={sheet.skills[indexSkill].skills[i] !== "R"}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SheetSkill;
