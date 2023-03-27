import { useParams } from "react-router-dom";
import GetOneSheet from "../../utils/GetOneSheet";
import SheetItem from "./SheetItem";
import SheetMatchup from "./SheetMatchup";
import SheetRune from "./SheetRune";
import SheetSkill from "./SheetSkill";
import SheetSpell from "./SheetSpell";

const ChampionSheet = () => {
  const sheetId = useParams();
  const sheet = GetOneSheet({ id: sheetId.id });
  return (
    <div className="champions">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${sheet.champion}.png`} alt={sheet.champion}
      />
      <div className="champions__sheet">
        {sheet && sheet.runes ? (
          <>
            <SheetRune sheet={sheet} />
            <SheetSpell sheet={sheet}/>
            <SheetItem sheet={sheet} />
            <SheetSkill sheet={sheet} />
            <SheetMatchup sheet={sheet} />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default ChampionSheet;
