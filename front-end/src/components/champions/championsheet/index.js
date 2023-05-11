import AllSheetByUser from "../../utils/AllSheetByUser";
import { Link } from "react-router-dom";
import toplane from "../../../images/toplane.webp"
import adc from "../../../images/adc.webp"
import jungle from "../../../images/jungle.webp"
import support from "../../../images/support.webp"
import midlane from "../../../images/midlane.webp"



const AllChampionSheet = () => {
  const sheetsChampion = AllSheetByUser();
  console.log(sheetsChampion);
  const roleImages = {
    toplane: toplane,
    midlane: midlane,
    adc: adc,
    jungle: jungle,
    support: support

  }

  console.log(sheetsChampion)
  return (
    <div className="champions__sheet">
      {sheetsChampion.map((sheet, index) => (
        <Link to={`/champions/${sheet._id}`} className="champions__sheet--image" aria-label={sheet.champion}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${sheet.champion}.png`}
            alt={sheet.champion}
          />
          <div>
            <img src={roleImages[sheet.role]} alt={roleImages[sheet.role]} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllChampionSheet;
