import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const ChartData = ({ data }) => {
    // console.log('ChartData')
    // console.log(data)
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
                default: 0
            },
            x: {
                ticks: {
                    callback: (value, index, values) => {
                        if(index === 0) {
                            return new Date().toLocaleDateString()
                        }
                        if(index === values.length - 1) {
                            return new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString();
                        }

                        return null;
                    },
                    offset: true,
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default ChartData;
