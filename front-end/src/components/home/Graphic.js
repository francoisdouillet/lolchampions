import ChartNumber from "./ChartNumber";
import moment from "moment";
import { useState } from "react";
import ChartRole from "./ChartRole";
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";

function Graphic({ matchups }) {
  const [duration, setDuration] = useState("30");

  function formatData(matchups) {
    const formattedData = [];
    const roleCount = {};
    const now = moment();
    for (let i = 0; i < duration; i++) {
      const date = now.clone().subtract(i, "days").format("DD/MM/YYYY");
      formattedData.push({ x: date, y: 0 });
    }
    for (let i = 0; i < matchups.length; i++) {
      const date = new Date(matchups[i].date);
      const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${date.getFullYear().toString()}`;
      for (let j = 0; j < formattedData.length; j++) {
        if (formattedData[j].x === formattedDate) {
          formattedData[j].y += 1;
          if (roleCount[matchups[i].role]) {
            roleCount[matchups[i].role] += 1;
          } else {
            roleCount[matchups[i].role] = 1;
          }
          break;
        }
      }
    }
    return {
      data: formattedData,
      roleCount,
    };
  }

  function getTotalCount(data) {
    let total = 0;
    data.forEach((item) => {
      total += item.y;
    });
    return total;
  }

  const { data: formattedData, roleCount } = formatData(matchups);

  return (
    <div className="graphic">
      <h1>
        Vous avez analysé {getTotalCount(formattedData)} match-up{" "}
        {duration === "30" ? "ce mois-ci" : "cette semaine"}
      </h1>
      <div className="graphic__button">
        <button
          onClick={() => setDuration("30")}
          className={duration === "30" ? "selected" : ""}
        >
          1 Mois
        </button>
        <button
          onClick={() => setDuration("7")}
          className={duration === "7" ? "selected" : ""}
        >
          1 semaine
        </button>
        <Link to="/historic">
                <button variant="contained">Historique</button>
        </Link>
      </div>
      <ChartNumber data={formattedData.reverse()} />
      <ChartRole data={roleCount} />
    </div>
  );
}

export default Graphic;
