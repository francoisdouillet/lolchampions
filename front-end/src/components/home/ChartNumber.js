import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const ChartNumber = ({ data }) => {
    const chartData = {
        labels: data.map(entry => entry.x),
        datasets: [
            {
                label: 'Match-up',
                data: data.map(entry => entry.y),
            }
        ],
    };

    const options = {
        plugins: {
            legend: {
              display: false
            }
          },
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 1,
                },
            },
            x: {
                ticks: {
                    callback: (value, index, values) => {
                        if(index === 0) {
                            return data[value].x
                        }
                        if(index === values.length - 1) {
                            return data[value].x
                        }
                        return null;
                    },
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default ChartNumber;
