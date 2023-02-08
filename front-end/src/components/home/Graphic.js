import ChartData from "./Chart";
import moment from 'moment';

function Graphic({matchups}) {

    function formatData(matchups) {
        const formattedData = []
        let count = 0;

        //Permet de creer toutes les dates même s'il n'y'a pas de document
        const now = moment();
        for (let i = 1; i < 30 ; i++) {
            const date = now.clone().subtract(i, 'days').format('MM/DD/YYYY');
            formattedData.push({ x: date, y: 0 });
        }   

        //Loop qui parcour chaque document et récupère la date
        for(let i = 0; i < matchups.length; i++) {
            const date = new Date(matchups[i].date);
            const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
            // Regarde s'il y'a déjà un document avec cette date
            let found = false;
            for(let j = 0; j < formattedData.length; j++) {
                if(formattedData[j].x === formattedDate) {
                    formattedData[j].y += 1;
                    found = true
                    break;
                }
            }
            // Si on ne trouve pas un document pour cette date
            if(!found) {
                count++
                formattedData.push({x: formattedDate, y: 1})
            }

            // Stop après 30 jours
            // if(count >= 30) {
            //     break;
            // }
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