import AllSheetByUser from "../../utils/AllSheetByUser";
import { Link } from "react-router-dom";

const AllChampionSheet = () => {
  const sheetsChampion = AllSheetByUser();
  console.log(sheetsChampion);
  return (
    <>
      {sheetsChampion.map((sheet, index) => (
        <Link to={`/champions/${sheet._id}`}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${sheet.champion}.png`}
          />
        </Link>
      ))}
    </>
  );
};

export default AllChampionSheet;
