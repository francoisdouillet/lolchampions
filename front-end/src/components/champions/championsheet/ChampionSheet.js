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
<<<<<<< HEAD
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
        const response = await axios.delete(`http://localhost:3000/api/champion/sheet/${sheetId.id}`);
        console.log(response);
        alert("Fiche de champion supprimé !");
        navigate('/champions')
      } catch (error) {
        console.error(error);
      }
    }
  }
  console.log('test')
=======
  console.log(sheet)

>>>>>>> parent of 5c1ca49 (back end + front delete sheet)
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
