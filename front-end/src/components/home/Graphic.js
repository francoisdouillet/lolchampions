import ChartData from "./Chart";
import moment from 'moment';

function Graphic({ matchups }) {


    function formatData(matchups) {
        const formattedData = []
        const now = moment();
        for (let i = 0; i < 30; i++) {
            const date = now.clone().subtract(i, 'days').format('DD/MM/YYYY');
            formattedData.push({ x: date, y: 0 });
        }
        for (let i = 0; i < matchups.length; i++) {
            const date = new Date(matchups[i].date);
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
            for (let j = 0; j < formattedData.length; j++) {
                if (formattedData[j].x === formattedDate) {
                    formattedData[j].y += 1;
                    break;
                }
            }
        }
        console.log(formattedData)
        return formattedData
    }

    return (
        <div className="graphic">
            <h1>Vous avez analysé {matchups.length} match-up ce mois-ci</h1>
            <ChartData data={formatData(matchups)}/>
        </div>
    )
}

export default Graphic;