import ChartNumber from "./ChartNumber";
import moment from 'moment';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import ChartRole from "./ChartRole";

function Graphic({ matchups }) {

    const [duration, setDuration] = useState('30')

    function formatData(matchups) {
        const formattedData = []
        const roleCount = {}
        const now = moment();
        for (let i = 0; i < duration; i++) {
            const date = now.clone().subtract(i, 'days').format('DD/MM/YYYY');
            formattedData.push({ x: date, y: 0 });
        }
        for (let i = 0; i < matchups.length; i++) {
            const date = new Date(matchups[i].date);
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
            for (let j = 0; j < formattedData.length; j++) {
                if (formattedData[j].x === formattedDate) {
                    formattedData[j].y += 1;
                    if(roleCount[matchups[i].role]) {
                        roleCount[matchups[i].role] += 1
                    } else {
                        roleCount[matchups[i].role] = 1
                    }
                    break;
                }
            }
        }
        return {
            data: formattedData, roleCount
        }
    }

    function getTotalCount(data) {
        let total = 0;
        data.forEach(item => {
            total += item.y;
        });
        return total;
    }

    const { data: formattedData, roleCount } = formatData(matchups);
    console.log(roleCount)

    return (
        <div className="graphic">
            <h1>Vous avez analysé {getTotalCount(formattedData)} match-up {duration === '30' ? 'ce mois-ci' : 'cette semaine'}</h1>
            <ToggleButtonGroup
                color="primary"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            >
                <ToggleButton sx={{ fontWeight: 'bold' }} value={"30"}>1 Mois</ToggleButton>
                <ToggleButton sx={{ fontWeight: 'bold' }} value={"7"}>1 Semaine</ToggleButton>
            </ToggleButtonGroup>
            <ChartNumber data={formattedData.reverse()} />
            <div style={{width: '70vw'}}>
            <ChartRole data={roleCount} />
            </div>
        </div>
    )
}

export default Graphic;