import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


const ChartRole = ({ data }) => {
    const chartData = {
        labels: ["Toplane", "Jungle","Midlane", "ADC", "Support"],
        datasets: [
            {
                data: [data.toplane, data.jungle, data.midlane, data.adc, data.support],
                backgroundColor: [
                    "#7F3E31",
                    "#1DAD00",
                    "#006ECA",
                    "#FF0000 ",
                    "#FFC100"
                ],
            }
        ]
    };


    return <Doughnut data={chartData} />;
};

export default ChartRole;
