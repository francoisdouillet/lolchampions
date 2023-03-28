import { useState } from "react";
import Allskillschamp from "../../utils/Allskillschamp";

const SheetSkill = ({ sheet }) => {
  const [indexSkill, setIndexSkill] = useState(0)
  const skills = Allskillschamp(sheet.champion);
  return (
    <div className="champions__sheet--container">
        <h3>SKILLS : {sheet.skills[indexSkill].title}</h3>
        {sheet.skills.length > 1 && (
        <div className="champions__sheet--number">
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
        </div>
      )}
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
                <button key={i} className={sheet.skills[indexSkill].skills[i] === 'Q' ? 'selected' : ''}>{i + 1}</button>
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
                <button key={i} className={sheet.skills[indexSkill].skills[i] === 'W' ? 'selected' : ''}>{i + 1}</button>
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
                <button key={i} className={sheet.skills[indexSkill].skills[i] === 'E' ? 'selected' : ''}>{i + 1}</button>
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
                <button key={i} className={sheet.skills[indexSkill].skills[i] === 'R' ? 'selected' : ''}>{i + 1}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SheetSkill;